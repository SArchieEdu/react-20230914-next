import Link from "next/link";

import styles from "./styles.module.css";

export default function AuthorizedLayout({ children }) {
  return (
    <>
      <header>
        <Link href={`/products?search=${123}`} className={styles.link}>
          Products
        </Link>
        <Link href={`/products?search=${456}`} className={styles.link}>
          Products
        </Link>
        <Link href="/cart" className={styles.link}>
          Cart
        </Link>
      </header>
      {children}
      <footer>Footer for user</footer>
    </>
  );
}
