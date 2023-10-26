import { NavigateButton } from "@/components/NavigateButton/component";
import { Products } from "@/components/Products/component";
import {
  ThemeContext,
  ThemeContextProvider,
} from "@/components/ThemeContextProvider/component";
import { getProducts } from "@/services/api";

export default async function ProductsPage({ searchParams }) {
  const products = await getProducts();
  console.log(products);

  return (
    <ThemeContextProvider theme="123">
      <div>
        <NavigateButton to="/cart">Cart</NavigateButton>
        <Products products={products} />
      </div>
    </ThemeContextProvider>
  );
}
