import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export async function loader({ request }) {
  const response = await customFetch(`/products`);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products;
