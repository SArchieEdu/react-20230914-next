export async function getProducts(cacheBehavior = "default") {
  const response = await fetch("http://localhost:3001/api/products/", {
    next: { tags: ["products"] },
    cache: cacheBehavior,
  });

  return await response.json();
}
export async function getProductById(productId, cacheBehavior = "default") {
  const response = await fetch(
    `http://localhost:3001/api/product/${productId}`,
    {
      next: { tags: ["products"] },
      cache: cacheBehavior,
    }
  );

  return await response.json();
}
