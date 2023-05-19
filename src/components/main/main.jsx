import Register from "./register";
import Cart from "./cart";
import ProgressControl from "./progress_control";
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";
import { FormContext } from "./formContext";

function Main() {
  const [dataPhase, setDataPhase] = useState(1)
  const cartData = useContext(CartContext)
  const [productData, setProductData] = useState(cartData)
  const formData = useContext(FormContext)
  const [formValue, setFormValue] = useState(formData)
  const totalPrice = productData.map(data => data.price * data.quantity).reduce((acc, cur) => acc + cur)


  function handleChange({ name, value }) {
    setFormValue((prevData) => {
      return prevData.map(data => {
        if (data.name === name) {
          return {
            ...data,
            value: value,
          }
        }
        return data;
      })
    })
  }

  function handleSubmit() {
    formValue.map(data => {
     return console.log(`${data.label}: ${data.value}`)
    })
    return console.log(`購物車總金額：${totalPrice}`)
  }


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
      handleSubmit()
      setFormValue(formData)
    }
  }


  return (
    <main className="site-main">
     <div className="main-container">
      <FormContext.Provider value={formValue}>
        <CartContext.Provider value={productData}>
          <Register dataPhase={dataPhase} onChange={handleChange} totalPrice={totalPrice}/>
          <Cart onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} totalPrice={totalPrice}/>
          <ProgressControl onClick={handleClick}/>
        </CartContext.Provider>
      </FormContext.Provider>
     </div>
    </main>
  )
}

export default Main;