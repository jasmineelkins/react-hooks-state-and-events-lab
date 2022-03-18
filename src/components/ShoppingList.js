import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  // const [groceryItems, setGroceryItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
    return selectedCategory;
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  const groceryItemList = itemsToDisplay.map((item) => (
    <Item name={item.name} category={item.category} key={item.id}></Item>
  ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">{groceryItemList}</ul>
    </div>
  );
}

export default ShoppingList;
