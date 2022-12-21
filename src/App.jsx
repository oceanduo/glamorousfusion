import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import React from "react";



const router = createBrowserRouter([
  
      {
        path: "/",
        element: <span>home</span>,
      },
      {
        path: "/products/:id",
        element: <input value='product' />,
      },
      {
        path: "/product/:id",
        element: <input value= 'hsahh'/>,
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