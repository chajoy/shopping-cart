import "./styles/App.css";
import { Outlet, Link } from "react-router-dom";
import Button from "./components/Button";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-stone-100">
      <div className="flex h-[100px] gap-5 justify-end items-center relative p-10 max-w-maxw m-auto sm:justify-around">
        <h1 className="font-header text-2xl mr-auto sm:absolute sm:translate-x-[-50%] left-[50%]">
          KickStart
        </h1>
        <Button to={"/"} style="hidden sm:block">
          Home
        </Button>
        <Button to={"shop"} style="hidden sm:block mr-auto">
          Shop
        </Button>
        <button>
          <i class="bi bi-bag-fill text-2xl"></i>
        </button>
        <button
          className="block sm:hidden "
          onClick={() => setMenuOpen((prev) => (prev = !prev))}
        >
          <i className="bi bi-list text-4xl hover:cursor-pointer"></i>
        </button>

        <div
          className={`absolute top-full left-0 w-full flex flex-col sm:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="w-full text-end py-5 px-10 text-xl hover:cursor-pointer bg-stone-100 hover:bg-stone-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="shop"
            className="w-full text-end py-5 px-10 text-xl hover:cursor-pointer bg-stone-100 hover:bg-stone-200"
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
  return (
    <>
      <Nav />
      <div className="m-auto max-w-maxw">
        <Outlet />
      </div>
    </>
  );
}

export default App;
