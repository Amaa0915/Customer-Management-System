// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar1.css'; // Import the CSS file

function Sidebar() {
  const location = useLocation();

  return (
    <div className="Sidebar">
      <br/>
      <ul>
        <li>
          <Link to="/customers" className="SidebarLink">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Users
          </Link>
        </li>
        </ul>
        <p className='System'>-----------Systems-----------</p>
        <ul>
        <li>
          <Link to="/customers" className="SidebarLink">
            Service/Repair
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Issue
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Supplier
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Employee
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Payment
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Online shop
          </Link>
        </li>
        <li>
          <Link to="/customers" className="SidebarLink">
            Customer
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
