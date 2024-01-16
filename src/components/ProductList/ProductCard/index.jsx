import styles from "../ProductCard/style.module.scss"
export const ProductCard = ({ product, addcart }) => {
    return(
        <li className={styles.cardlist}>
            <div className={styles.snackdiv}>
              <img className={styles.snackimage}src={product.img} alt={product.name} />  
            </div>
            <div className={styles.snacktable}>
                <h3>{product.name}</h3>
                <span className={styles.spancategory}>{product.category}</span>
                <span className={styles.spanprice}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addcart(product)}>Adicionar</button>
            </div>
        </li>
    )
}