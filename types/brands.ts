export type BrandTheme = {
  name: string;
  logo: string;
  loginBg: string;
};

export type BrandThemes = {
  [key: string]: BrandTheme;
};

export enum BrandName {
  StyleSphere = "Style Sphere",
  BallersBoutique = "Ballers Boutique",
}
