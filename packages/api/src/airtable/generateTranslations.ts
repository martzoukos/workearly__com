import fs from "fs/promises";
import fetchTranslations from "./fetchTranslations";
import path from "path";
import { TranslationType } from "../types";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);
const OUTPUT_DIR = "./src/airtable/__generated__";

async function formatWithPrettier(filePath: string) {
  try {
    await execAsync(`npx prettier --write "${filePath}"`);
    console.log(`✅ Prettier formatted: "${filePath}"`);
  } catch (error) {
    console.error(`❌ Failed to format ${filePath} with Prettier:`, error);
  }
}

async function generateTypeDefinition(translations: TranslationType[]) {
  const allTexts = new Set<string>();

  translations.forEach(({ code }) => {
    if (code) {
      allTexts.add(code);
    }
  });

  const typeStrings = Array.from(allTexts)
    .map((text) => JSON.stringify(text))
    .join(" | ");

  const typeDefinition = `export type TranslationTextType = ${typeStrings};\n`;

  const outputFile = path.resolve(`${OUTPUT_DIR}/translations.d.ts`);
  await fs.writeFile(outputFile, typeDefinition, "utf-8");
  console.log(
    "✅ TypeScript type definition successfully written to translations.d.ts"
  );

  await formatWithPrettier(outputFile);
}

async function generateTranslations() {
  try {
    console.log("Fetching translations...");
    const translations = await fetchTranslations();

    const outputDir = path.resolve(OUTPUT_DIR);
    const jsonFile = path.join(outputDir, "translations.json");

    await fs.mkdir(outputDir, { recursive: true });

    console.log("Writing translations to translations.json...");
    await fs.writeFile(
      jsonFile,
      JSON.stringify(translations, null, 2),
      "utf-8"
    );

    await formatWithPrettier(jsonFile);

    console.log("Generating TypeScript type definition...");
    await generateTypeDefinition(translations);

    console.log("✅ Translations successfully generated.");
  } catch (error) {
    console.error("❌ Failed to generate translations:", error);
    process.exit(1);
  }
}

generateTranslations();
