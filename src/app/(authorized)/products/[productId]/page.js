import Link from "next/link";

export default function ProductPage({ params: { productId }, searchParams }) {
  console.log(searchParams);
  return (
    <div>
      <Link href="/products">Products</Link>ProductPage: {productId}
    </div>
  );
}
