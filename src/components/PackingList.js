import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "item")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="item">Sort by Item</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}> Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
