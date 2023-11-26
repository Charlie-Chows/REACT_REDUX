import React from "react";
import  ReactDOM  from "react-dom/client";

// React Element
const heading = <h1 id="Heading">JSX Heading</h1>;

// React Functional Component
const HeadingComponent = ()=>{
    return <h1>Heading Component</h1>
};

// Ways to write multiple line 
// By using round braces 
const RoundBrace = ()=>(
    <div>
    <h1>Round braces component</h1>
    </div>
);
// Byusing Curly brackets
const CurlyBrace = ()=>{
    return(
        <div>
            <h1>Curly Brace component</h1>
        </div>
    )
}

// We can write in single line 
const SingleLineComp = ()=><h1>Single line component</h1>;

/**************************************************************************************** */

// Component Composition(jargon) :: Calling one component in other component 
const HeadComponent = ()=>{
    return (
        <h1>Head Component</h1>
    )
};

const BodyComponent = ()=>{
    return(
        <div>
            <HeadComponent />
            <h1>Body Component</h1>
        </div>
    )
}

/**************************************************************************************** */

// react component using normal function(anonymous function)
const NormalFunc = function (){
    return(
    <div>
        <h1>I am react comp using Normal function </h1>      
    </div>
    );
};

/**************************************************************************************** */

// JS inside JSX
const num = 8;
const NumberComponent = ()=>(
    // const num = 7; if we declare here it will throw error
    <div>
        <h1>HELLO</h1>
        {num}
        <h2>{num}</h2> {/* output : 8 */}
    </div>
);

const NumberComponent1 = ()=>{
    const num = 7;
    return (
        <div>
        <h1>HELLO</h1>
        <h2>{num}</h2>  {/* output : 7 */}
    </div>
    );
};

/**************************************************************************************** */


const ParentComponent = ()=>{
    return (
        <h1>Parent Component</h1>
    )
};

const ChildComponent = ()=>{
    return(
        <div>
           {/*  Ways to invoke the component */}
            <ParentComponent />
            <ParentComponent></ParentComponent>
            {ParentComponent()}
           {/*  {ParentComponent}  we can't invoke like this */}
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//call the any component , each component plays its own role here
root.render(<ChildComponent/>);




