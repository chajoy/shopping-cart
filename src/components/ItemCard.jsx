import { Link } from "react-router-dom";
import { useState } from "react";

const Placeholder = ({ className }) => {
  return (
    <div
      className={`bg-black/50 h-full w-full animate-pulse ${className}`}
    ></div>
  );
};

const ItemCard = ({ item, hover }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link to={`/item/${item.id}`}>
      {item ? (
        <div
          className={`relative text-black  aspect-square overflow-hidden cursor-pointer transition-transform ${
            hover ? "hover:scale-105" : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            onLoad={() => setImgLoaded(true)}
            className="absolute top-0 left-0 h-full object-contain"
          />

          {imgLoaded ? (
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-5 text-white">
              <p className="font-bold text-xl">{item.title}</p>
              <p>£{item.price.toFixed(2)}</p>
            </div>
          ) : (
            <Placeholder className={`absolute top-0 left-0`} />
          )}
        </div>
      ) : (
        <Placeholder />
      )}
    </Link>
  );
};

export default ItemCard;
