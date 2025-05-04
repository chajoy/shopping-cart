const ItemCard = ({ item, hover }) => {
  return (
    <div
      className={`text-black bg-white aspect-square overflow-hidden p-5 rounded-sm cursor-pointer transition-transform flex flex-col ${
        hover ? "hover:scale-105" : ""
      }`}
    >
      <p className="font-bold text-xl hidden md:block">{item.title}</p>
      <p className="hidden md:block">£{item.price.toFixed(2)}</p>
      <img
        src={item.image}
        alt={`image of ${item.title}`}
        draggable="false"
        className="m-auto"
      />
    </div>
  );
};

export default ItemCard;
