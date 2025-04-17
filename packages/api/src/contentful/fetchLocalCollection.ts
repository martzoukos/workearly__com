import fs from "fs";
import { DocumentNode, OperationDefinitionNode } from "graphql";
import path from "path";

export default function fetchLocalCollection<T>(
  doc: DocumentNode,
  filter: (item: T) => boolean
): T[] {
  const name = getOperationName(doc);

  if (!name) {
    throw new Error("Operation name not found");
  }

  const filePath = path.resolve(
    process.cwd(),
    `../../packages/api/src/contentful/__generated__/${name}.json`
  );

  if (fs.existsSync(filePath)) {
    try {
      const cached = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const items = cached.items ?? [];

      const filteredItems = items.filter(filter);

      return filteredItems as T[];
    } catch (err) {
      console.warn(`⚠️ Failed to read or parse ${name}`, err);
    }
  } else {
    console.warn(`⚠️ File not found: ${name}`);
  }

  throw new Error(`Item not found in ${name}`);
}

function getOperationName(doc: DocumentNode): string | undefined {
  const operationDef = doc.definitions.find(
    (def): def is OperationDefinitionNode => def.kind === "OperationDefinition"
  );
  return operationDef?.name?.value;
}
