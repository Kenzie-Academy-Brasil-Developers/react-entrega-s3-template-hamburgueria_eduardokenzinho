import styles from "../ProductList/style.module.scss"
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addcart}) => {
   return (
      <ul className={styles.snackmenu}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addcart={addcart} />
         ))}
      </ul>
   );
};
