import React, { useState } from "react";

// created a form, and listening for submit event, by and passing the handleSubmit function, while preventing page reload.
function Form({ onAddItems }) {
  //controlled elements! it takes a piece of state, passes/forces the state into the value, and updates the state to the current value using onChange event
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // gaurder function preventing empty submit
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    // resets the form elements after submit
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <h3>What are we packing??</h3>
      </div>
      <div className="inputs">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {/* creating an array with the length of 20, and adding values to the index (i). 
          Then maping over the arrray to give the object an option value */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item Name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
