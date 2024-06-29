import { BrandTheme } from "@/types/brands";

export type NavigationType = {
  name: string;
  href: string;
  id: number;
};

export type HeaderProps = {
  theme: BrandTheme;
};
