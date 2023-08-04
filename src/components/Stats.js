import React from "react";

function Stats({ items }) {
  // early return makes for better and faster rendering, if array or data is empty, that way no logic needs to be performed
  if (!items.length)
    return <p className="stats">Ready to add items to your list? 😁</p>;
  // derived state, setting a value based off of a current state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 0
          ? `You have ${numItems} items on your list, but nothing is packed 😓`
          : percentage === 100
          ? "You have everything ready to go! 👍✈🌍"
          : `You have ${numItems} items on your list, and you already packed
          ${numPacked} 🙂 (${percentage}%)`}
        {console.log(percentage)}
      </em>
    </footer>
  );
}

export default Stats;
