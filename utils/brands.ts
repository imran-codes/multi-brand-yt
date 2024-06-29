import { BrandThemes } from "@/types/brands";

export const brandThemes: BrandThemes = {
  styleSphere: {
    name: "Style Sphere",
    logo: "/ss-logo.png",
    loginBg: "/ss-loginBg.jpg",
  },
  ballersBoutique: {
    name: "Ballers Boutique",
    logo: "/ballers-boutique-logo.png",
    loginBg: "/bb-login-bg.jpg",
  },
};

export const getActiveBrand = () => {
  if (process.env.NEXT_PUBLIC_BRAND === undefined) {
    throw new Error("NEXT_PUBLIC_BRAND environment variable is not set");
  }
  return process.env.NEXT_PUBLIC_BRAND;
};
