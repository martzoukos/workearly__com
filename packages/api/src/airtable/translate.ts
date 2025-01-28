import { LocaleType, TranslateOptionsType } from "../types";
import { TranslationTextType } from "./__generated__/translations";
import TRANSLATIONS from "./__generated__/translations.json";

export default function translate(
  locale: LocaleType,
  code: TranslationTextType | undefined,
  options?: TranslateOptionsType
): string {
  let translation = TRANSLATIONS.find((t) => t.code === code);

  if (!translation) {
    translation = TRANSLATIONS.find((t) => t.el === code);
  }

  if (!translation) {
    translation = TRANSLATIONS.find((t) => t.en === code);
  }

  if (translation) {
    if (locale === "en") {
      return translation.en;
    } else if (locale === "el") {
      return translation.el;
    }
  }

  if (options?.fallbackCode) {
    return translate(locale, options.fallbackCode);
  }

  if (options?.allowMissing) {
    return "";
  } else {
    return code || "";
  }
}
