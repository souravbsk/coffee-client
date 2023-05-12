import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import AddToCoffee from "./components/AddToCoffee/AddToCoffee";
import CoffeeDetail from "./components/CoffeeDetail/CoffeeDetail";
import CoffeeUpdate from "./components/CoffeeUpdate/CoffeeUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('http://localhost:5000/coffees')
      },
      {
        path:"/addCoffee",
        element:<AddToCoffee></AddToCoffee>
      },
      {
        path:"/coffees/:id",
        element:<CoffeeDetail></CoffeeDetail>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)

      },{
        path:"/updateCoffee/:id",
        element:<CoffeeUpdate></CoffeeUpdate>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
