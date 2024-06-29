import { ProductType } from "@/types/products";
import Image from "next/image";

function IndividualProduct({ product }: { product: ProductType }) {
  if (!product) return null;
  return (
    <div>
      <div className="aspect-h-1 aspect-w-1 p-4  items-center justify-center flex overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          width={80}
          height={50}
          src={product?.image || ""}
          alt={product?.title || ""}
          className="h-80 w-80 object-contain object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm">{product?.title}</h3>
      <p className="mt-1 text-lg font-medium">£{product?.price}</p>
    </div>
  );
}

export default IndividualProduct;
