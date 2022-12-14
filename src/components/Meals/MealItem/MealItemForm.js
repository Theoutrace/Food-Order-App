import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amounIsValid, setAmountIsValid] = useState(true);

  const amountinputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountinputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)

  };



  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountinputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amounIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
