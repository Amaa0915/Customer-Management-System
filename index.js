import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './components/Register';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Userprofile from './components/Userprofile';
import Edituser from './components/Edituser';
import PromoList from './components/Promolist';
import ViewDetails from './components/Viewdetails';
import UpdateCustomerForm from './components/Updatecustomer';
import Registration from './Screens/Login&Register/Registration';
import LoginPage from './Screens/Login&Register/Login';
import Report from './components/Report';
import Sidebar from './components/Sidebar1';
import Viewcustomerlist from './components/Viewcustomerlist';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/userprofile",
    element: <Userprofile />
  },

  {
    path: "/edituser",
    element: <Edituser />
  },

  {
    path: "/promolist",
    element: <PromoList />
  },

  {
    path: "/viewdetails/:id",
    element: <ViewDetails />
  },

  {
    path: "/updatecustomer/:id",
    element: <UpdateCustomerForm />
  },

  {
    path: "/registration",
    element: <Registration />
  },

  {
    path: "/loginpage",
    element: <LoginPage />
  },

  {
    path: "/report",
    element: <Report />
  },

  {
    path: "/sidebar",
    element: <Sidebar />
  },

  {
    path:"viewcustomer",
    element:<Viewcustomerlist/>
  }
  
  
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
