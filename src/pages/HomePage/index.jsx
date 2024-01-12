import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../components/services/api";

export const HomePage = () => {
   // const [allOrders, setOrders] = useState(localOrders ? JSON.parse(localOrders) : []) 
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

   // const localOrders = localStorage.getItem("@MYREQUESTS")

   // useEffect(() => {
   //    localStorage.setItem("@MYREQUESTS", JSON.stringify(allOrders))
   // })



   // feito - useEffect montagem - carrega os produtos da API e joga em productList
   // feito - useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // feito - renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header setVisible={setVisible}/>
         <main>
            <ProductList productList={productList} />
            {isVisible ? <CartModal setVisible={setVisible} cartList={cartList} /> : null}
         </main>
      </>
   );
};
