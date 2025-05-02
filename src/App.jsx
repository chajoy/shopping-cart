import "./App.css";
import { Outlet } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <>
      <nav className="bg-stone-100 flex p-5 gap-20 justify-center">
        <Button text={"home"} to={"/"} />
        <h1 className="font-header text-4xl">KickStart</h1>
        <Button text={"shop"} to={"shop"} />
      </nav>
      <Outlet />
    </>
  );
}

export default App;
