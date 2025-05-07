import { Link } from "react-router-dom";

const Button = ({ to, invert, className, onClick, children }) => {
  if (to) {
    return (
      <Link
        onClick={onClick}
        to={to}
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
  }

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 hover:cursor-pointer transition-colors duration-100 ${className} 
      ${
        invert
          ? "text-white outline-1 outline-white bg-black hover:text-black hover:bg-white"
          : "text-black outline-1 outline-black bg-white hover:text-white hover:bg-black"
      }
    `}
    >
      {children}
    </button>
  );
};

export default Button;
