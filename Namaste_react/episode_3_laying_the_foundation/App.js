import React from "react";
import  ReactDOM  from "react-dom/client";

const reactHeading = React.createElement("h1",{id: "reactHeading"},"React Heading");
const jsxHeading = <h1 id="JSXHeading">JSX Heading</h1>;

// Both will console the object
console.log(jsxHeading);
console.log(reactHeading);


