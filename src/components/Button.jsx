import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="bg-transparent text-black outline-1 px-5 py-2 hover:cursor-pointer hover:bg-black hover:text-white transition-colors duration-100 rounded"
    >
      {text}
    </Link>
  );
};

export default Button;
