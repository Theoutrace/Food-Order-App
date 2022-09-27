import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  const cartcntext = useContext(CartContext);

  useEffect(() => {
    var totalPrice = 0;
    cartcntext.items.forEach((i) => totalPrice += (i.quantity * i.price))
    setTotal(totalPrice.toFixed(2))
  }, [cartcntext.items])



 
  
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntext.items.map((item) => (
        <li className={classes.total}>
          <div>{item.name} </div>
          <div>Price: {item.price} </div>
          <div>Quantity: {item.quantity} </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;



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