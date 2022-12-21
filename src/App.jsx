import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import React from "react";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Footer from "./commponents/Footer/Footer";
import Navbar from "./commponents/Navbar/Navbar";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
       <RouterProvider router={router} />
    </>
 
 )
  

};

export default App;