
/**
 * TASK 1.2 :: CREATE FUNCTIONAL COMPONENT ,USE JSX , IMPLEMENT COMPONENT COMPOSITION ( call one component in another )
 * 
 */


import React from 'react';
import  ReactDOM  from "react-dom/client";

const TitleComponent = () => {
    return(
        <div className="title">
            <h1>I am H1 tag</h1>
            <h2>I am H2 tag</h2>
            <h3>I am H3 tag</h3>
        </div>
    )
};

const SubtitleComponent = () => {
    return(
        <div>
           {/*  Component Composition */}
            {TitleComponent}    {/* It won't render, without JSX syntax you cant render a component */}
            {<TitleComponent />}
            <TitleComponent />
            <TitleComponent></TitleComponent>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SubtitleComponent/>);



