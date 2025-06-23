import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Button from "./components/Button";
import { AddToCart } from "./Cart";

const Item = ({ item, quantity, setQuantity, cart, loading = false }) => {
  if (loading || !item) {
    return (
      <div className="grid lg:grid-cols-[40%_60%] max-w-maxw m-auto p-5 md:p-10 gap-10">
        <div className="bg-black/50 aspect-square animate-pulse"></div>
        <div className="flex flex-col gap-10 lg:p-10 items-center sm:items-start">
          <div className="bg-black/50 animate-pulse h-10 w-[100%]"></div>
          <div className="bg-black/50 animate-pulse h-10 w-[60%]"></div>
          <div className="bg-black/50 animate-pulse h-10 w-[70%]"></div>
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
            <p>0</p>
            <button
              className="outline-1 aspect-square w-8 hover:bg-black hover:text-white cursor-pointer"
              onClick={() => setQuantity((prev) => (prev = prev + 1))}
            >
              +
            </button>
          </div>
          <Button>Add to Cart</Button>
          <div className="bg-black/50 animate-pulse h-10 w-[50%]"></div>
        </div>
      </div>
    );
  }

  const inCart = loading ? null : cart.data.findIndex((i) => i.id === item.id);

  return (
    <div className="grid lg:grid-cols-[40%_60%] max-w-maxw m-auto p-5 md:p-10 gap-10">
      <img
        src={item.image}
        alt={`photo of ${item.title}`}
        className=" aspect-square object-cover object-top m-auto lg:w-[100%] sm:w-[80%] self-center border-1 border-stone-300"
      />
      <div className="flex flex-col gap-10 lg:p-10 items-center sm:items-start">
        <h1 className="font-header text-3xl sm:text-4xl">{item.title}</h1>
        <p>{item.desc}</p>
        <p className="text-2xl">£{item.price.toFixed(2)}</p>
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
        <p className="text-xl">{item.description}</p>
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
      <div className="bg-[url(/shopbg.jpg)] bg-cover h-[100px]"></div>
      <Item
        item={item}
        quantity={quantity}
        setQuantity={setQuantity}
        cart={cart}
      />
    </div>
  );
};

export default ItemPage;
