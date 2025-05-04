import ItemCard from "./ItemCard";
import { useState } from "react";

const Carousel = ({ items, className }) => {
  const [currentIndex, setIndex] = useState(0);

  const handleLeft = () => {
    const index = currentIndex == 0 ? items.length - 1 : currentIndex - 1;
    setIndex(index);
  };

  const handleRight = () => {
    const index = currentIndex == items.length - 1 ? 0 : currentIndex + 1;
    setIndex(index);
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] gap-5 items-center ${className}`}
    >
      <i
        className="bi bi-arrow-left-circle-fill text-white text-4xl cursor-pointer"
        onClick={handleLeft}
      ></i>
      <ItemCard item={items[currentIndex]} hover={false} />
      <i
        className="bi bi-arrow-right-circle-fill text-white text-4xl cursor-pointer"
        onClick={handleRight}
      ></i>
    </div>
  );
};

export default Carousel;
