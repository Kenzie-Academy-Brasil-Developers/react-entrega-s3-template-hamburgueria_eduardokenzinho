import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../components/services/api";

export const HomePage = () => {
   const [isVisible, setVisible] = useState(false);
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         const { data } = await api.get("products");
         setProductList(data);
      };
      getProducts()
   }, [])

   const addcart = (products) => {
      const noDuplicates = cartList.some((snack) => snack.id === products.id);
      if (!noDuplicates) {
         setCartList([...cartList, products]);
         localStorage.setItem("@MYREQUESTS", JSON.stringify(cartList))
      }}

   useEffect(() => {
      const verifyitem = JSON.parse(localStorage.getItem("@MYREQUESTS"))
      if (verifyitem) {
         setCartList(verifyitem)
      }
   }, []);

   const removecart = (productid) => {
      const newcart = cartList.filter(({ id }) => id !== productid);
      setCartList(newcart);
   }

   const removeall = () => {
      setCartList([]);
   }

   // feito - useEffect montagem - carrega os produtos da API e joga em productList
   // feito - useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // feito - adição, exclusão, e exclusão geral do carrinho
   // feito - renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header setVisible={setVisible} />
         <main>
            <ProductList productList={productList} addcart={addcart} />
            {isVisible ? <CartModal setVisible={setVisible} cartList={cartList} removeall={removeall} removecart={removecart} /> : null}
         </main>
      </>
   );
};
