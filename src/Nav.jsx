import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";

const Nav = ({ hasScrolled, setCartOpen }) => {
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
        transparent ? "bg-transparent border-b-0" : "bg-stone-100 border-b-1"
      } fixed w-full transition-colors z-1`}
    >
      <div className="flex h-[100px] gap-5 justify-end items-center relative p-10 max-w-maxw m-auto sm:justify-around">
        <Link
          to={"/"}
          className="mr-auto sm:absolute sm:translate-x-[-50%] left-[50%]"
        >
          <h1 className="font-bold text-2xl">OUTFITTERS</h1>
        </Link>
        <Button to={"/"} className="hidden sm:block">
          Home
        </Button>
        <Button to={"shop"} className="hidden sm:block mr-auto">
          Shop
        </Button>
        <div className="relative">
          <button onClick={() => setCartOpen((prev) => (prev = !prev))}>
            <i className="bi bi-basket-fill text-2xl px-2 py-1 cursor-pointer bg-white outline-1 hover:bg-black hover:text-white outline-black"></i>
          </button>
        </div>
        <button
          className="sm:hidden  bg-white w-10 outline-1 aspect-square flex items-center justify-center hover:bg-black hover:text-white outline-black"
          onClick={() => setMenuOpen((prev) => (prev = !prev))}
        >
          <i className="bi bi-list text-4xl hover:cursor-pointer"></i>
        </button>

        {/* NAV BAR FOR MOBILE */}
        <div
          className={`absolute top-full left-0 w-full flex-col sm:hidden bg-stone-100 shadow-2xl transition-opacity border-1 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="w-full text-end py-5 px-10 text-xl hover:cursor-pointer hover:bg-stone-300 transition-colors border-b-1"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="shop"
            className="w-full text-end py-5 px-10 text-xl hover:cursor-pointer hover:bg-stone-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
