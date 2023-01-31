import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from "./components/sections/Contacto";
import Error404 from "./components/Error404";
import Footer from "./components/general/Footer";
import NavBar from "./components/general/NavBar";
import Nosotros from "./components/sections/Nosotros";
import Test from "./components/sections/Test";
import Ayuda from "./components/sections/Ayuda";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/context/CartContext"
import Checkout from "./components/Cart/Checkout";


function App() {
  return (
     <CartContextProvider>
        <div>      
          <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route exact path={"/"} element={<Test/>} />
                <Route exact path={"/Productos"} element={<ItemListContainer/>} />
                <Route exact path={"/cart"} element={<Cart/>} />
                <Route exact path={"/Productos/category/:id"} element={<ItemListContainer/>} />
                <Route exact path={"/nosotros"} element={<Nosotros/>} />
                <Route exact path={"/ayuda"} element={<Ayuda/>} />
                <Route exact path={"/contacto"} element={<Contacto/>} />
                <Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
                <Route exact path={"/checkout"} element={<Checkout/>} />

                <Route exact path={"*"} element={<Error404/>} />
              </Routes>
              <Footer/>
          </BrowserRouter>
        </div>
      </CartContextProvider>        
  );
}

export default App;
