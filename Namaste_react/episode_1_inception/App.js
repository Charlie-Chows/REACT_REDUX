 /** 
  *  There are 3 parts of code each one have unique purpose 
  *   - first code take html tag, style || custom attributes , text .
  *   - second code render nested children
  *   - third code render siblings using array
  * 
  *   - if you want to comment and uncomment other code while running one
  */
 
//create h1 tag & add text
const heading = React.createElement("h1",{id:"heading",xyz:"hello",style:{color:"blue"}},"Hello world in react");
console.log(heading);
console.log(heading.props.xyz);
// create root & call root id in html code 
const root = ReactDOM.createRoot(document.getElementById("root"));
// render h1 tag using the root element
root.render(heading);
/* 
const parent = React.createElement("div",{id: "parent"},React.createElement("div",{className: "title"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag"),React.createElement("h3",{},"I am H3 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 */
/***********************************************************************************************************************************/ 

/**
 * <div id="parent"> 
 *    <div id="child">
 *        <h1>I am H1 tag</h1>
 *    </div>
 * </div>
 * 
 * ReactElement(object) => HTML (Browser Understands)
 */

// code to build above hierarchy
/* const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},React.createElement("h1",{},"I am H1 tag")));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

/**********************************************************************************************************************************************/

/**
 * <div id="parent"> 
 *    <div id="child">
 *        <h1>I am H1 tag</h1>
 *        <h2>I am H2 tag</h2>
 *    </div>
 * </div>
 * 
 */

// code to build above hierarchy
/* const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

/****************************************************************************************************************************************************/