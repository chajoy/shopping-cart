import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Button from "./components/Button";
import { AddToCart } from "./Cart";

const Hero = () => {
  return <div className="bg-[url(/shopbg.jpg)] bg-cover h-80"></div>;
};

const Item = ({ item, quantity, setQuantity, cart }) => {
  const inCart = cart.data.findIndex((i) => i.id === item.id);

  return (
    <div className="grid grid-cols-[30%_70%] max-w-maxw m-auto p-10">
      <img
        src={item.image}
        alt={`photo of ${item.title}`}
        className=" aspect-square object-cover object-top p-10"
      />
      <div className="flex justify-center items-start flex-col gap-10 p-10">
        <h1 className="font-header text-4xl">{item.title}</h1>
        <p className="text-2xl">£{item.price.toFixed(2)}</p>
        <p className="text-xl">{item.description}</p>
        <div className="flex gap-10 items-center">
          <button
            className="outline-1 aspect-square w-8 hover:bg-black hover:text-white cursor-pointer"
            onClick={() =>
              setQuantity((prev) => {
                if (prev == 0) {
                  return prev;
                } else {
                  prev = prev - 1;
                  return prev;
                }
              })
            }
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="outline-1 aspect-square w-8 hover:bg-black hover:text-white cursor-pointer"
            onClick={() => setQuantity((prev) => (prev = prev + 1))}
          >
            +
          </button>
          {inCart >= 0 ? `${cart.data[inCart].quantity} in Cart` : ""}
        </div>
        <Button
          onClick={() => {
            if (quantity == 0) {
              return;
            } else {
              AddToCart(cart, {
                item: item,
                quantity: quantity,
                inCart: inCart,
              });
            }
            setQuantity(0);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

const ItemPage = () => {
  const [quantity, setQuantity] = useState(0);
  const { data, loading, error, cart } = useOutletContext();
  const { id } = useParams();
  const item = data ? data.find((db_item) => db_item.id === Number(id)) : "";

  return (
    <div>
      <Hero />
      {loading ? (
        "...loading"
      ) : (
        <Item
          item={item}
          quantity={quantity}
          setQuantity={setQuantity}
          cart={cart}
        />
      )}
    </div>
  );
};

export default ItemPage;
