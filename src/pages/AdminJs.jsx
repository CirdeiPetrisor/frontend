import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import {NavLink} from 'react-router-dom';
import AdminStyle from '../css/AdminStyle.css';
import {AiOutlineHome} from "react-icons/ai";

function AdminJs() {
  return (
   
        <div className="Sidebar">
          <AiOutlineHome/>
          
        </div>
  
  );
}

export default AdminJs;