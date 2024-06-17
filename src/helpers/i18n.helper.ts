import en from "../locales/en.json";

const translate: Record<string, string> = en;
export default function i18n(text: string): string {
  return translate[text];
}
