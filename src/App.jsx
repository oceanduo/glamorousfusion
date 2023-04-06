import {
  Route, Routes
} from "react-router-dom";
import "./app.scss"

import React from "react";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Contact from "./commponents/Contact/Contact";




const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/products/:id" element={<Products/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </>
 
 )
  

};

export default App;


// 用下面的方法首先不用在index.js文件中加browserRouter， 然后在之后的每个page中不用重复的引入navbar和footer
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";
// import "./app.scss"

// import React from "react";
// import Home from "./pages/Home/Home";
// import Products from "./pages/Products/Products";
// import Product from "./pages/Product/Product";
// import Footer from "./commponents/Footer/Footer";
// import Navbar from "./commponents/Navbar/Navbar";


// const Layout = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/products/:id",
//         element: <Products />,
//       },
//       {
//         path: "/product/:id",
//         element: <Product />,
//       },
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <>
//        <RouterProvider router={router} />
//     </>
 
//  )
  

// };

// export default App;