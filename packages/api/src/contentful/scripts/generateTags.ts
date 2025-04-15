import { createClient } from "contentful-management";
import fs from "fs/promises";
import path from "path";

const OUTPUT_DIR = "./src/contentful/__generated__";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});

async function generateTags() {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment("master");
    const tags = await environment.getTags();

    const tagsJson = JSON.stringify(
      tags.items.map((item) => ({
        name: item.name,
        id: item.sys.id,
      })),
      null,
      2
    );

    const outputFile = path.resolve(`${OUTPUT_DIR}/contentful-tags.json`);
    await fs.writeFile(outputFile, tagsJson, "utf-8");

    console.log("Tags saved to contentful-tags.json");
  } catch (error) {
    console.error("Error fetching or saving metadata tags:", error);
  }
}

generateTags();
