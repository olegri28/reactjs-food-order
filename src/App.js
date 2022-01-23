import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHeandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    showCartHeandler(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCartHeandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
