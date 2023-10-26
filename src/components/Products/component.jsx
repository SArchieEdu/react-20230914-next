import Link from "next/link";

export const Products = ({ products }) => {
  console.log("render");

  return (
    <div>
      {products?.map(({ id, name }) => (
        <Link key={id} href={`/products/${id}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};
