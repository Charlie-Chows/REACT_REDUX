import React from "react";
import  ReactDOM  from "react-dom/client";

// code to build above hierarchy
//console.log("1");
const parent = React.createElement("h1",{},"hello world");
/* const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")])); */
//console.log("2");
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log("3");
root.render(parent); 
//console.log("4");
console.log("5");

