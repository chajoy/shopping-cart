import { Link } from "react-router-dom";

const Button = ({ to, invert, className, children }) => {
  return (
    <Link
      to={to}
      viewTransition
      className={`px-5 py-2 hover:cursor-pointer transition-colors duration-100 rounded ${className} 
      ${
        invert
          ? "text-white outline-1 outline-white hover:text-black hover:bg-white"
          : "text-black outline-1 outline-black hover:text-white hover:bg-black"
      }
    `}
    >
      {children}
    </Link>
  );
};

export default Button;
