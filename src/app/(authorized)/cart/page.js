import { getProducts } from "@/services/api";

export default async function CartPage() {
  const products = await getProducts();
  return <div>CartPage</div>;
}
