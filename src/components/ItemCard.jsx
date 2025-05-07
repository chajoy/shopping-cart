import { Link } from "react-router-dom";

const ItemCard = ({ item, hover }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div
        className={`text-black bg-white outline-1 aspect-square overflow-hidden p-5 cursor-pointer transition-transform flex flex-col ${
          hover ? "hover:scale-105" : ""
        }`}
      >
        <p className="font-bold text-xl">{item.title}</p>
        <p>£{item.price.toFixed(2)}</p>
        <img
          src={item.image}
          alt={`image of ${item.title}`}
          draggable="false"
          className="m-auto"
        />
      </div>
    </Link>
  );
};

export default ItemCard;
