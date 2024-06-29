export type IndividualProductType = {
  product: ProductType;
};

// create a type for the products
export type ProductType = {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};
