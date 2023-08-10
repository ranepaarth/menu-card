import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";

// const Router = createBrowserRouter();

const App = () => {
  return (
    <>
      <div className="title">
        <h1>Our Menu</h1>
        <div className="text-underline"></div>
      </div>
      <div className="btn-container"><HeaderButtons /></div>
    </>
  );
};

export default App;
