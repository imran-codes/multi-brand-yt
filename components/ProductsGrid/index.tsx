import IndividualProduct from "../IndividualProduct";
import Link from "next/link";
import { ProductType } from "./types";

const ProductsGrid = ({ data }: { data: ProductType[] }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px6 sm:sm-24 lg:max-w-7xl lg:px-9">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {data?.map((product: ProductType) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <IndividualProduct product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
