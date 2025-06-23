import "./styles/App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import useFetchAPI from "./Hooks/useFetchAPI";
import { CartOverlay } from "./Cart";
import Footer from "./Footer";

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const { data, error, loading } = useFetchAPI(
    "https://footwear-api.vercel.app/products"
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
      <div className="min-h-screen flex flex-col">
        <Nav hasScrolled={hasScrolled} setCartOpen={setCartOpen} cart={cart} />
        <div className="flex-grow">
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
        </div>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}

export default App;
