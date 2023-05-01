import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import './styles/all.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer></footer>
    </div>
  );
}

export default App;
