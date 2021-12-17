import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";
function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
