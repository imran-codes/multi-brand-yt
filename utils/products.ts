export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data;
}

// Create other CRUD functions here
export async function getProductById(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
