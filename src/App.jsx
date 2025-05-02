import "./styles/App.css";
import { Outlet, Link } from "react-router-dom";
import Button from "./components/Button";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-stone-100 flex h-[100px] gap-20 justify-around items-center sm:justify-center relative">
        <Button to={"/"} style="hidden sm:block">
          Home
        </Button>
        <h1 className="font-header text-2xl">KickStart</h1>
        <Button to={"shop"} style="hidden sm:block">
          Shop
        </Button>
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
      </nav>
    </>
  );
};

function App() {
  return (
    <>
      <Nav />
      <div className="m-auto max-w-400">
        <Outlet />
      </div>
    </>
  );
}

export default App;
