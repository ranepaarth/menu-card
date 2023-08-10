import React from "react";

const HeaderButtons = ({categories, filterItems }) => {
  // console.log(categories);
  return (
    // <div className="btns">
    //   <button onClick={() => filterItems("all")}>All</button>
    //   <button onClick={() => filterItems("breakfast")}>Breakfast</button>
    //   <button onClick={() => filterItems("lunch")}>Lunch</button>
    //   <button onClick={() => filterItems("shakes")}>Shakes</button>
    // </div>

    <div className="btns">
      {categories.map((category,index) =>{
        return <button onClick={() => filterItems(category)} key={index}>{category}</button>
      })}
    </div>

    //If further if there is need to add more categories then we have to manually add the buttons.

    //therefore this dynamic approach to add buttons based on the categories of items.
  );
};

export default HeaderButtons;
