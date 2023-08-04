import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  // the useState and the add items function are in the closest parent component bc two siblings need access to the data
  // this sets new items in the array of items
  const [items, setItems] = useState([]);

  // this adds the items into a new array bc arrays are immutable
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    // deleting items from array, by looping over array (filter) and making a new array with the items not equal to th id selected
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete your list?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      {/* passing props into the child components */}
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
