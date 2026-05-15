export type Language = "en" | "it";

export const getLanguageFromPath = (pathname: string): Language =>
  pathname === "/it" || pathname.startsWith("/it/") ? "it" : "en";

export const stripLanguageFromPath = (pathname: string) => {
  if (pathname === "/it") return "/";
  if (pathname.startsWith("/it/")) return pathname.replace(/^\/it/, "") || "/";
  return pathname;
};

export const localizePath = (path: string, language: Language) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutLanguage = stripLanguageFromPath(normalized);

  if (language === "it") {
    return withoutLanguage === "/" ? "/it" : `/it${withoutLanguage}`;
  }

  return withoutLanguage;
};

export const toggleLanguagePath = (pathname: string, hash = "") => {
  const currentLanguage = getLanguageFromPath(pathname);
  const nextLanguage: Language = currentLanguage === "it" ? "en" : "it";
  return `${localizePath(pathname, nextLanguage)}${hash}`;
};
