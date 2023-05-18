import Register from "./register";
import Cart from "./cart";
import ProgressControl from "./progress_control";
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";

function Main() {
  const [dataPhase, setDataPhase] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)
  const cartData = useContext(CartContext)
  const [productData, setProductData] = useState(cartData)


  function handleClick(e) {
    if (e.target.classList.contains('next') && dataPhase !== 3) {
      setDataPhase(n => n + 1)
    } else if (e.target.classList.contains('prev')) {
      setDataPhase(n => n - 1)
    } else if (dataPhase === 3) {
      setDataPhase(1)
    }
  }

  function getSum(sum) {
    setTotalPrice(totalPrice + sum)
    if ((totalPrice + sum) < 0) {
      setTotalPrice(0)
    }
  }

  return (
    <main className="site-main">
     <div className="main-container">
      <CartContext.Provider value={productData}>
        <Register dataPhase={dataPhase} totalPrice={totalPrice}/>
        <Cart getSum={getSum} totalPrice={totalPrice}/>
        <ProgressControl onClick={handleClick}/>
      </CartContext.Provider>
     </div>
    </main>
  )
}

export default Main;