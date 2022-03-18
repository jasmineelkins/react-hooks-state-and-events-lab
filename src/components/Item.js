import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(!inCart);
    return inCart;
  }

  const itemClass = inCart ? "in-cart" : "";
  const btnText = inCart ? "Remove From Cart" : "Add To Cart";
  const btnColor = inCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnColor} onClick={handleClick}>
        {btnText}
      </button>
    </li>
  );
}

export default Item;
