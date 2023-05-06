import Register from "./register";
import Cart from "./cart";
import ProgressControl from "./progress_control";
import { useState } from "react";

function Main() {
  const [dataPhase, setDataPhase] = useState(1)

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
      <Register dataPhase={dataPhase}/>
      <Cart />
      <ProgressControl onClick={handleClick}/>
     </div>
    </main>
  )
}

export default Main;