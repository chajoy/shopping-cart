import "./styles/App.css";
import { Outlet, Link } from "react-router-dom";
import Button from "./components/Button";
import { useState, useEffect } from "react";

const Nav = ({ hasScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const changeColor = () => {
      if (hasScrolled) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    changeColor();
  }, [hasScrolled]);

  return (
    <div
      className={`${
        transparent ? "bg-transparent" : "bg-stone-100"
      } fixed w-full z-1 transition-colors`}
    >
      <div className="flex h-[100px] gap-5 justify-end items-center relative p-10 max-w-maxw m-auto sm:justify-around">
        <h1 className="font-bold text-2xl mr-auto sm:absolute sm:translate-x-[-50%] left-[50%]">
          OUTFITTERS
        </h1>
        <Button to={"/"} className="hidden sm:block">
          Home
        </Button>
        <Button to={"shop"} className="hidden sm:block mr-auto">
          Shop
        </Button>
        <button>
          <i className="bi bi-bag-fill text-2xl"></i>
        </button>
        <button
          className="block sm:hidden "
          onClick={() => setMenuOpen((prev) => (prev = !prev))}
        >
          <i className="bi bi-list text-4xl hover:cursor-pointer"></i>
        </button>

        <div
          className={`absolute top-full left-0 w-full flex flex-col sm:hidden bg-stone-100/50 backdrop-blur-sm transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            to="/"
            className="w-full text-end py-5 px-10 text-xl hover:cursor-pointer hover:bg-stone-200 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="shop"
            className="w-full text-end py-5 px-10 text-xl hover:cursor-pointer hover:bg-stone-200 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);

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
      <Nav hasScrolled={hasScrolled} />
      <Outlet />
    </>
  );
}

export default App;
