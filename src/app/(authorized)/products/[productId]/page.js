import { getProductById, getProducts } from "@/services/api";
import Link from "next/link";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map(({ id }) => ({ productId: id }));
}

export default async function ProductPage({ params: { productId } }) {
  const product = await getProductById(productId);
  return (
    <div>
      <Link href="/products">Products</Link>
      ProductPage: {product.name} - {product.type}
    </div>
  );
}
