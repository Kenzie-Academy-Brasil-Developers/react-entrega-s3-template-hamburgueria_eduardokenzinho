import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addcart}) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addcart={addcart} />
         ))}
      </ul>
   );
};
