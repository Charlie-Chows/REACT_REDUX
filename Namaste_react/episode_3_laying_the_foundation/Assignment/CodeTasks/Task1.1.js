/**
 * <div className="title">
 *    <h1>I am H1 Tag</h1>
 *    <h2>I am H2 Tag</h2>
 *    <h3>I am H1 Tag</h3>
 * </div>
 */

const parent = React.createElement("div",{id: "parent"},React.createElement("div",{className: "title"},[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag"),React.createElement("h3",{},"I am H3 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
