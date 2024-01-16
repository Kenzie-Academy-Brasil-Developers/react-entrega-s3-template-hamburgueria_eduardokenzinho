import styles from "../ProductList/style.module.scss"
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addcart }) => {
   return (
      <section className={styles.sectionmenu}>
         <div className="container">
            <ul className={styles.snackmenu}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addcart={addcart} />
            ))}
         </ul>
         </div>
      </section>
   );
};
