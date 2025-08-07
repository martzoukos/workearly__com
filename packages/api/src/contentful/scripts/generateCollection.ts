import { TypedDocumentNode } from "@urql/core";
import { exec } from "child_process";
import crypto from "crypto";
import fs from "fs";
import { DocumentNode, OperationDefinitionNode } from "graphql";
import path from "path";
import { promisify } from "util";
import {
  ContentfulMetadataFilter,
  SysFilter,
} from "../graphql/__generated__/gql/graphql";
import { getServerClient } from "../graphql/client";

const INTERVAL = 5 * 60 * 1000;
const OUTPUT_DIR = "./src/contentful/__generated__";

type ContentTypeVariables = {
  where?: {
    sys?: SysFilter;
    contentfulMetadata?: ContentfulMetadataFilter;
  };
  limit: number;
  skip?: number;
};

type OptionsType<TData, TVariables> = {
  query: TypedDocumentNode<TData, TVariables>;
  variables?: TVariables;
  mapItems: (data: TData | undefined) => any[] | null | undefined;
  mapTotal: (data: TData | undefined) => number | null | undefined;
};

export default async function generateCollection<TData>({
  query,
  variables,
  mapItems,
  mapTotal,
}: OptionsType<TData, ContentTypeVariables>) {
  const name = getOperationName(query) ?? "unknown";
  const outputFile = path.resolve(`${OUTPUT_DIR}/${name}.json`);
  const difference = Date.now() - INTERVAL;
  let cached;

  if (fs.existsSync(outputFile)) {
    try {
      cached = JSON.parse(fs.readFileSync(outputFile, "utf-8"));
      if (
        cached.__timestamp &&
        cached.__timestamp > difference &&
        Array.isArray(cached.items) &&
        cached.items.length > 0
      ) {
        console.log(`⏭️  Skipping ${name} (cached and fresh)`);
        return;
      }
    } catch (err) {
      console.warn(
        `⚠️  Failed to parse existing cache for ${name}, refetching.`
      );
    }
  }

  const [client] = getServerClient();
  const limit = variables?.limit ?? 1000;
  let skip = 0;
  let total = 0;

  const items = [];

  do {
    const { data, error } = await client
      .query(query, {
        limit,
        skip,
      })
      .toPromise();

    if (data) {
      const groupItems = mapItems(data);

      items.push(...(groupItems || []));

      if (total === 0) {
        total = mapTotal(data) || 0;
      }
    } else if (error) {
      console.error(`❌ Failed to fetch ${name} from Contentful`);
      console.error(error);
      process.exit(1);
    }

    skip += limit;
  } while (items.length < total);

  const newHash = generateHash(items);

  if (newHash === cached?.__hash) {
    console.log(`⏭️  Skipping ${name} (hash match, data unchanged)`);
    return;
  }

  const payload = {
    __timestamp: Date.now(),
    __hash: newHash,
    total,
    items,
  };

  fs.writeFileSync(outputFile, JSON.stringify(payload, null, 2));
  console.log(`✅ ${name} dumped to ${outputFile}`);

  await formatWithPrettier(outputFile);
}

const execAsync = promisify(exec);
async function formatWithPrettier(filePath: string) {
  try {
    await execAsync(`npx prettier --write "${filePath}"`);
    console.log(`✅ Prettier formatted: "${filePath}"`);
  } catch (error) {
    console.error(`❌ Failed to format ${filePath} with Prettier:`, error);
  }
}

function getOperationName(doc: DocumentNode): string | undefined {
  const operationDef = doc.definitions.find(
    (def): def is OperationDefinitionNode => def.kind === "OperationDefinition"
  );
  return operationDef?.name?.value;
}

function generateHash(data: unknown): string {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
}
