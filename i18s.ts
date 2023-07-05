import en from "./i18n/en";
import es from "./i18n/es";
import fr from "./i18n/fr";
import pt from "./i18n/pt";
import ru from "./i18n/ru";
import tr from "./i18n/tr";
import zh from "./i18n/zh";

export enum LanguageKey {
  en = "en",
  es = "es",
  fr = "fr",
  pt = "pt",
  ru = "ru",
  tr = "tr",
  zh = "zh",
}

export type Language = {
  language: string;
  findTheInvisibleCow: string;
  animal: {
    cow: string;
    goat: string;
    fox: string;
  };
  instruction: {
    intro: string;
    audio: string;
  };
  cta: {
    start: string;
    findA: string;
  };
  success: {
    congratulations: string;
    found: string;
    keepItUp: string;
    unlockAtFive: string;
    unlockAtFifty: string;
    unlockedAll: string;
  };
  config: {
    expertMode: string;
    expertModeDescription: string;
    findA: string;
  };
  social: {
    shareOnTwitter: string;
  };
  stats: {
    globalPoints: string;
    points: string;
  };
  support: {
    webExperiment: string;
    sorry: string;
    possiblyUnsupported: string;
    browsers: string;
  };
  footer: {
    credits: string | null;
    creditsButton: string | null;
    privacyPolicyButton: string | null;
    seenOnBoredButton: string | null;
    byScriptist: string | null;
  };
};

const i18n: Record<LanguageKey, Language> = {
  en,
  es,
  fr,
  pt,
  ru,
  tr,
  zh,
};

export default i18n;
