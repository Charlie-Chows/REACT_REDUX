import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{},React.createElement("h2",{},React.createElement("h3",{},React.createElement("div",{className:"title",}))))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent/>);




