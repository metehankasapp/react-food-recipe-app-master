import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.showCartHandler}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table ful of delicious food !"/>
      </div>
    </Fragment>
  );
};

export default Header;
