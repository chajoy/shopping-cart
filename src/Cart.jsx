import { useOutletContext } from "react-router-dom";
import Button from "./components/Button";

const AddToCart = (cart, itemToAdd) => {
  const cartCopy = [...cart.data];
  if (itemToAdd.inCart >= 0) {
    cartCopy[itemToAdd.inCart] = {
      ...itemToAdd.item,
      quantity: cartCopy[itemToAdd.inCart].quantity + itemToAdd.quantity,
    };
  } else {
    cartCopy.push({ ...itemToAdd.item, quantity: itemToAdd.quantity });
  }
  cart.setCart(cartCopy);
};

const DeleteItem = (cart, itemToDelete, index = null) => {
  const cartCopy = [...cart.data];
  let _index = index;
  if (!_index) {
    _index = cart.data.findIndex((item) => item.id === itemToDelete.id);
  }
  cartCopy.splice(_index, 1);
  cart.setCart(cartCopy);
};

const Quantity = (cart, itemToUpdate, add) => {
  const data = cart.data;
  const copyCart = [...cart.data];
  const index = data.findIndex((item) => item.id === itemToUpdate.id);
  if (add) {
    copyCart[index] = {
      ...itemToUpdate,
      quantity: itemToUpdate.quantity + 1,
    };
  } else {
    if (itemToUpdate.quantity == 0) {
      return;
    }
    copyCart[index] = {
      ...itemToUpdate,
      quantity: itemToUpdate.quantity - 1,
    };
  }
  cart.setCart(copyCart);
};

const CartOverlay = ({ cart }) => {
  const { data: cartItems, setCartOpen, cartOpen } = cart;
  return (
    <div>
      <div
        className={`p-5 bg-white outline-1 top-0 flex flex-col right-0 gap-5 fixed transition-all h-full w-full sm:w-100 z-2 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <i
          className="bi bi-x text-4xl bg-black text-white self-end cursor-pointer hover:bg-stone-600 flex"
          onClick={() => setCartOpen((prev) => (prev = !prev))}
        ></i>
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-2 grid-rows-[auto_auto_1fr]"
            >
              <div className="aspect-square row-span-3">
                <img src={item.image} alt="" className="h-[100%] m-auto" />
              </div>
              <p>{item.title}</p>
              <p>£{item.price}</p>
              <div className="flex gap-4 items-center">
                <button
                  className="outline-1 aspect-square w-8 hover:bg-black hover:text-white cursor-pointer"
                  onClick={() => Quantity(cart, item)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="outline-1 aspect-square w-8 hover:bg-black hover:text-white cursor-pointer"
                  onClick={() => Quantity(cart, item, true)}
                >
                  +
                </button>
                <button
                  className="outline-1 aspect-square w-8 hover:bg-black hover:text-white cursor-pointer flex items-center justify-center"
                  onClick={() => DeleteItem(cart, item)}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
          );
        })}
        <Button to={"Cart"} onClick={() => setCartOpen(false)}>
          Checkout
        </Button>
      </div>
      <div
        className={`bg-black/50 fixed w-lvw h-lvh z-1 ${
          cartOpen ? "hidden sm:block" : "hidden sm:hidden"
        }`}
      ></div>
    </div>
  );
};

const Cart = () => {
  const { cart } = useOutletContext();

  console.log(cart);

  return (
    <div>
      <p>Cart Page</p>
    </div>
  );
};

export default Cart;

export { Cart, CartOverlay, AddToCart };
