import React from "react";

const HeaderButtons = ({ filterItems }) => {
  return (
    <div className="btns">
      <button onClick={() => filterItems("all")}>All</button>
      <button onClick={() => filterItems("breakfast")}>Breakfast</button>
      <button onClick={() => filterItems("lunch")}>Lunch</button>
      <button onClick={() => filterItems("shakes")}>Shakes</button>
    </div>
  );
};

export default HeaderButtons;
