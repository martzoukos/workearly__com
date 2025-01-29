import { useRouter } from "next/router";
import {
  LocaleType,
  translate as rawTranslate,
  TranslateOptionsType,
  TranslationTextType,
} from "@workearly/api";

export default function useTranslate() {
  const router = useRouter();

  function translate(
    code: TranslationTextType | undefined,
    options?: TranslateOptionsType
  ): string {
    const locale = (router.locale || "el") as LocaleType;
    return rawTranslate(locale, code, options);
  }

  return translate;
}
