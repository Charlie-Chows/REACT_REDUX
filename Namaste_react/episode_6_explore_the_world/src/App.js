import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const AppLayout = ()=>{
    return(
        <div>
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    
    {
        path : "/about",
        Element : <About />,
    },  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




