import { Link } from "react-router-dom";

const Button = ({ to, invert, className, onClick, children }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      viewTransition
      className={`px-5 py-2 hover:cursor-pointer transition-colors duration-100 ${className} 
      ${
        invert
          ? "text-white outline-1 outline-white bg-black hover:text-black hover:bg-white"
          : "text-black outline-1 outline-black bg-white hover:text-white hover:bg-black"
      }
    `}
    >
      {children}
    </Link>
  );
};

export default Button;
