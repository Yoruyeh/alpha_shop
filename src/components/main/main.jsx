import Register from "./register";
import Cart from "./cart";
import ProgressControl from "./progress_control";
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";

function Main() {
  const [dataPhase, setDataPhase] = useState(1)
  const cartData = useContext(CartContext)
  const [productData, setProductData] = useState(cartData)

  function handleMinusClick(id) {
    setProductData((prevData) => {
      return prevData.map(data => {
        if (data.id === id) {
          return {
            ...data,
            quantity: data.quantity === 0 ? 0 : data.quantity - 1
          }
        }
        return data;
      })
    })
  }

  function handlePlusClick(id) {
    setProductData((prevData) => {
      return prevData.map(data => {
        if (data.id === id) {
          return {
            ...data,
            quantity: data.quantity + 1
          }
        }
        return data;
      })
    })
  }


  function handleClick(e) {
    if (e.target.classList.contains('next') && dataPhase !== 3) {
      setDataPhase(n => n + 1)
    } else if (e.target.classList.contains('prev')) {
      setDataPhase(n => n - 1)
    } else if (dataPhase === 3) {
      setDataPhase(1)
    }
  }


  return (
    <main className="site-main">
     <div className="main-container">
      <CartContext.Provider value={productData}>
        <Register dataPhase={dataPhase}/>
        <Cart onMinusClick={handleMinusClick} onPlusClick={handlePlusClick}/>
        <ProgressControl onClick={handleClick}/>
      </CartContext.Provider>
     </div>
    </main>
  )
}

export default Main;