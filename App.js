import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar.js';
import Allcustomers from './components/Allcustomers.js';
import { Switch, Route, Router } from 'react-router-dom'
import ViewDetails from './components/Viewdetails.js';
import UpdateCustomerForm from './components/Updatecustomer.js';
import Header from './components/Header/Header.js';



function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Allcustomers/>
    </div>
    </>
  );
}

export default App;
