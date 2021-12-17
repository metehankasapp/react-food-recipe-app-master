import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li key={props.key}>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <div>
        <MealItemForm id={props.key} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
