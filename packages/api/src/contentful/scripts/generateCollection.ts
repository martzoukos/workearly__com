import { TypedDocumentNode } from "@urql/core";
import { exec } from "child_process";
import fs from "fs";
import { DocumentNode, OperationDefinitionNode } from "graphql";
import path from "path";
import { promisify } from "util";
import {
  ContentfulMetadataFilter,
  SysFilter,
} from "../graphql/__generated__/gql/graphql";
import { getServerClient } from "../graphql/client";

const INTERVAL = 6 * 60 * 60 * 1000;

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
  outputDir: string;
};

export default async function generateCollection<TData>({
  query,
  variables,
  mapItems,
  mapTotal,
  outputDir,
}: OptionsType<TData, ContentTypeVariables>) {
  const name = getOperationName(query) ?? "unknown";
  const outputFile = path.resolve(`${outputDir}/${name}.json`);
  const sixHoursAgo = Date.now() - INTERVAL;

  if (fs.existsSync(outputFile)) {
    try {
      const cached = JSON.parse(fs.readFileSync(outputFile, "utf-8"));
      if (
        cached.__timestamp &&
        cached.__timestamp > sixHoursAgo &&
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

  const payload = {
    __timestamp: Date.now(),
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
