"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ProductsPage({ searchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <button
        onClick={() => {
          router.replace("/cart");
        }}
      >
        Cart
      </button>
    </div>
  );
}
