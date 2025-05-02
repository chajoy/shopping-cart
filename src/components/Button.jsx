import { Link } from "react-router-dom";

const Button = ({ children, to, style = "" }) => {
  return (
    <Link
      to={to}
      viewTransition
      className={`bg-transparent text-black outline-1 px-5 py-2 hover:cursor-pointer hover:bg-black hover:text-white transition-colors duration-100 rounded ${style}`}
    >
      {children}
    </Link>
  );
};

export default Button;
