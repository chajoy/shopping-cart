import { useOutletContext } from "react-router-dom";
import Button from "./components/Button";

const CalTotal = (cart) => {
  const cartCopy = cart.data;
  const total = cartCopy.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return total;
};

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

const CartItem = ({ item, cart }) => {
  return (
    <>
      <div
        key={item.id}
        className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_1fr] gap-4 my-5 items-start "
      >
        <div className="h-40 aspect-square row-span-3">
          <img
            src={item.image}
            alt={`image of ${item.title}`}
            className="object-contain w-full h-full"
          />
        </div>
        <p>{item.title}</p>
        <p>£{item.price.toFixed(2)}</p>
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
      <hr />
    </>
  );
};

const CartOverlay = ({ cart }) => {
  const { data: cartItems, setCartOpen, cartOpen } = cart;
  return (
    <div>
      <div
        className={`p-5 bg-white outline-1 top-0 right-0 fixed transition-all h-full w-full sm:w-100 z-2 flex flex-col gap-5 overflow-y-auto ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="grid grid-cols-[1fr_auto] gap-5">
          <Button to={"cart"} onClick={() => setCartOpen(false)}>
            Checkout
          </Button>
          <i
            className="bi bi-x text-4xl bg-black text-white cursor-pointer hover:bg-stone-600 aspect-square flex items-center justify-center"
            onClick={() => setCartOpen((prev) => (prev = !prev))}
          ></i>
          <p className="text-2xl">Total £{CalTotal(cart).toFixed(2)}</p>
        </div>
        <div>
          {cartItems.map((item) => {
            return <CartItem item={item} cart={cart} key={item.id} />;
          })}
        </div>
      </div>

      {/* bg overlay */}
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

  return (
    <div>
      <div className="bg-black/30 bg-blend-overlay bg-[url(/trainer_3.jpg)] bg-cover bg-center">
        <div className="min-h-100 flex items-start justify-end flex-col text-white p-10 max-w-maxw m-auto">
          <h1 className="font-header text-6xl">Checkout</h1>
        </div>
      </div>
      <div className="max-w-maxw m-auto p-10 gap-5 flex flex-col">
        <div>
          {cart.data.map((item) => {
            return <CartItem item={item} key={item.id} cart={cart} />;
          })}
        </div>
        <p className="text-2xl">Total £ {CalTotal(cart).toFixed(2)}</p>
        <Button invert>Proceed to Payment</Button>
      </div>
    </div>
  );
};

export default Cart;

export { Cart, CartOverlay, AddToCart, CalTotal };
