import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  let [isDark, setIsDark] = useState(false);
  function handleClick() {
    setIsDark((isDark) => !isDark);
    return isDark;
  }

  const appClass = isDark ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
