import React, { useContext } from "react";

import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartCntx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount" + props.id).value;
    cartCntx.addItem({ ...props.item, quantity: quantity});
  };
  return (
    <form className={classes.form}>

      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
