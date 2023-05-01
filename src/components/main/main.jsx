import Register from "./register";
import Cart from "./cart";
import ProgressControl from "./progress_control";

function Main() {
  return (
    <main className="site-main">
     <div className="main-container">
      <Register />
      <Cart />
      <ProgressControl />
     </div>
    </main>
  )
}

export default Main;