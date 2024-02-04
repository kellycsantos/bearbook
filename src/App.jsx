import { useState } from "react";
import "./App.css";

import Input from "./components/Input/Input";
import Hi from "./assets/bear-say-hi.png";

function App() {
  return (
    <>
      <div className="login-container">
        <h1>Bearbook</h1>
        <img src={Hi} className="bear-img" />
        <div className="input-container">
          <Input tipo="email" placeholder="email@jmail.com" />
          <Input tipo="password" placeholder="******" />
          <Input tipo="button" placeholder="******" dado="Login" />
          <footer>
            <small>  © kellycdev</small>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
