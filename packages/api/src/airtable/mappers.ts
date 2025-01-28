import { Record, FieldSet } from "airtable";
import { LocaleType } from "../types";

export function mapToTranslationItem(record: Record<FieldSet>) {
  const code = toString(record, "code").trim();
  const el = toString(record, "el").trim();
  const en = toString(record, "en").trim();

  const item = {
    code,
    el,
    en,
  };

  return item;
}

function toString(
  record: Record<FieldSet>,
  name: string,
  locale?: LocaleType
): string {
  if (locale) {
    const value = toString(record, getFieldName(name, locale));

    if (value) {
      return value;
    }
  }

  return record.get(name)?.toString() || "";
}

function toStringArray(
  record: Record<FieldSet>,
  name: string,
  locale?: LocaleType
): string[] {
  if (locale) {
    const value = toStringArray(record, getFieldName(name, locale));

    if (value.length > 0) {
      return value;
    }
  }

  const value = record.get(name);

  if (Array.isArray(value)) {
    return (value || []) as string[];
  }

  if (typeof value === "string") {
    return [value];
  }

  return [];
}

function getFieldName(fieldName: string, locale: LocaleType) {
  return `${fieldName}_${locale}`;
}

function getNormalizedRecord(record: Record<FieldSet>) {
  const lowerCaseRecord = Object.keys(record.fields).reduce((acc, key) => {
    acc.fields[key.toLowerCase()] = record.get(key);
    return acc;
  }, record);

  return lowerCaseRecord;
}
