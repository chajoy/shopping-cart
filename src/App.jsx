import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import useFetchAPI from "./Hooks/useFetchAPI";
import cartData from "./cart.json";
import { CartOverlay } from "./Cart";

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cart, setCart] = useState(cartData);
  const [cartOpen, setCartOpen] = useState(false);

  const { data, error, loading } = useFetchAPI(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav hasScrolled={hasScrolled} setCartOpen={setCartOpen} cart={cart} />
      <CartOverlay
        cart={{ data: cart, setCart, setCartOpen, cartOpen: cartOpen }}
      />
      <Outlet
        context={{
          data,
          error,
          loading,
          cart: { data: cart, setCart },
        }}
      />
    </>
  );
}

export default App;
