import "./checkout.styles.scss";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);
 

   

  return (
    <div>
      <h1>This is checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {

           const {id, name, imageUrl, price, quantity} = cartItem;

          return (
            <div key={id}>
              <p>{name}</p>
              <img src={imageUrl} alt={`${name}`} />
              <p>
                {quantity} x ${price * quantity}
              </p>
              <span onClick={() => removeItemToCart(cartItem)}>Decrement</span>
              <br/>
              <span onClick={() => addItemToCart(cartItem)} style={{cursor: "pointer"}}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
