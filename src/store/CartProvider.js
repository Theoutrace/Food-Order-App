import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item, quantity) => {
    const idx = items.findIndex((itm) => itm.id === item.id)

      if (idx === -1) {
        return updateItems([...items, item]);
      } else {

        items[idx].quantity=parseInt(items[idx].quantity)
        items[idx].quantity +=Number( item.quantity);
        return items;  
      }
      
  };

 

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // console.log(cartContext);


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

/**
 * Abhik Das9:48 PM
const addItemToCart = (item, addQty) => {
  const idx = items.findIndex((i) => i.id == item.id)

  if (id == -1) {
    return [...items, item];
  } else {
    items[idx].quantity += addQty;
    return items;
  }
}
Abhik Das9:53 PM
const [total, setTotal] = useState(0);

useEffect(() => {
  var totalPrice = 0;
  cartCtx.items.forEach((i) => totalPrice += (i.qty * i.price))
  setTotal(totalPrice)
}, [cartCtx.items])

<p>Total price {total}</p>
 */
