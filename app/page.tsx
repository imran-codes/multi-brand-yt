import ProductsGrid from "@/components/ProductsGrid";
import { getAllProducts } from "@/utils/products";

export default async function Home() {
  const allProducts = await getAllProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsGrid data={allProducts} />
    </main>
  );
}
