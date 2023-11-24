import React from "react";
import  ReactDOM  from "react-dom/client";

// React Element
const heading = <h1 id="Heading">JSX Heading</h1>;

// React Functional Component
const HeadingComponent = ()=>{
    return <h1>Heading Component</h1>
};

// If multiple lines we used round braces
const HeadingComponent1 = ()=>(
    <h1>Heading Component 1</h1>
);

// We can write in single line 
const HeadingComponent2 = ()=><h1>Heading Component 2</h1>;

/************************************************************************************************** */

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
};

/************************************************************************************************** */

// JS inside JSX
const num = 7;
const NumberComponent = ()=>(
    <div>
        <h1>HELLO</h1>
        {num}
        <h2>{num}</h2>
    </div>
);

const NumberComponent1 = ()=>{
    const num = 7;
    return (
        <div>
        <h1>HELLO</h1>
        {num}
        <h2>{num}</h2>
    </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NumberComponent1/>);




------------------------------------------------------------------------------------------------------------


// React Element  
const heading = <h1 id="heading">JSX Heading</h1>
console.log(heading);  
/********************************************************************************* */

// Different ways of writing Functional components
//Round braces with single line
const Approach1 = ()  => (<h1>Functional Component single line : Approach1</h1>);
 console.log(Approach1());
 console.log(<Approach1 />);

//Without round braces
const Approach2 = () => <h1>Without Round braces : Approach2</h1>

// Multiple lines using div & How to use js inside JSX 
const num = 7;
const Approach3 = () => { 
    // const num1 = 8;
   return(
    <div>
        {num}        {/* JS inside JSX by using { } */}
        <h1>Using Curly braces and return : Approach3</h1>
        <Approach1 />
        <Approach2 />
    </div>
   );
   };

const Approach4 = () => ( 
  <div>
        {num}
        <h1>Using round baces Multiline : Approach4</h1>
        <Approach1 />
        <Approach2 />
    </div>
);
/********************************************************************************* */

// react component using normal function(anonymous function)
const NormalFunc = function (){
    return(
    <div>
        <h1>I am react comp using Normal function </h1>      
    </div>
    );
};
/********************************************************************************* */

// both will render same 
const Curly = () => {
    return <h1>Hello</h1>
};
    
const Round = () => (
    <div>
        <h1>Hello</h1>
    {Curly()}
    </div>

)
/********************************************************************************* */

// Component Composition(jargon) :: Calling one component in other component 
const HeadComponent = ()=>{
    return (
        <h1>Head Component</h1>
    )
};

const BodyComponent = ()=>{
    return(
        <div>
           {/*  Ways to invoke the component */}
            <HeadComponent />
            <HeadComponent></HeadComponent>
            {HeadComponent()}
            {/* {HeadComponent} we cant invoke like this it throws error*/}  
            <h1>Body Component</h1>
        </div>
    )
};
