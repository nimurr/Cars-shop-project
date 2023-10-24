import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import MyCart from './Pages/MyCart.jsx';
import Details from './Pages/Details.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import AllCars from './Pages/AllCars.jsx';
import CarDetails from './Pages/CarDetails.jsx';
import Update from './Pages/Update.jsx';
import MyCartUpdate from './Pages/MyCartUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addproduct',
        element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
      },
      {
        path: '/carsdetails',
        element: <PrivetRoute><Details></Details></PrivetRoute>
      },
      {
        path:'/mycart',
        element:<PrivetRoute><MyCart></MyCart></PrivetRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/update/:id',
        loader: ({params})=> fetch(`https://assigment-server-site.vercel.app/addproducts/${params.id}`),
        element: <PrivetRoute><Update></Update></PrivetRoute>
      },
      {
        path: '/update2/:id',
        loader: ({params})=> fetch(`https://assigment-server-site.vercel.app/mycart/${params.id}`),
        element: <PrivetRoute><MyCartUpdate></MyCartUpdate></PrivetRoute>
      },
      {
        path: '/cars/allProduct/:id',
        loader:()=> fetch('https://assigment-server-site.vercel.app/addproducts/'),
        element: <PrivetRoute><AllCars></AllCars></PrivetRoute>
      },
      {
        path: '/details/:id',
        loader:()=> fetch('https://assigment-server-site.vercel.app/addproducts/'),
        element:<PrivetRoute><CarDetails></CarDetails></PrivetRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
