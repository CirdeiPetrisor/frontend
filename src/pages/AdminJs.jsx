import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import AdminStyle from '../css/AdminStyle.css';
import {AiOutlineHome} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {FaRegBuilding} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {ImOffice} from "react-icons/im";
import {VscSignOut} from "react-icons/vsc";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {FiArrowDown} from 'react-icons/fi'
import { BrowserRouter as Router ,Routes ,Route ,Link,NavLink, BrowserRouter} from 'react-router-dom';
import GETdata from '../components/GETdata';
import BuildingManagementAdmin from "./BuildingManagementAdmin";
import OfficeManagementAdmin from "./OfficeManagementAdmin";
const AdminJs=()=> {
  return (
        <div>
        <div className="Sidebar">
         

            <div>
              <header className="header">
              <a>
                  Company name
                </a>
                <a > <AiOutlineArrowLeft /></a>
                <br/>
                <br/>
                  <a>
                    Administrator:
                  </a>
                  <br/>
                  <a>Administrator name</a>
                  
              </header>
            
              </div>
              
            <nav>
              <ul className="buttons">
              
                  <li >
                  <Link to="/Admin" className='linkStyle'>
                    <button>
                    <AiOutlineHome/> <span>General</span>
                    <FiArrowDown/>
                    </button>
                    </Link >
                    <div className='generalChildren'>
                        <a>Desk Assignment</a>
                        <br/>
                        <a>Remote work approval</a>
                        </div>
                    </li>

                      <li>
                      
                    </li>
                    <li>
                      <Link to="/Admin/BuildingManagement" className='linkStyle'>
                        <button>
                    <FaRegBuilding /> <span> Building Management </span>
                    </button>
                      </Link>

                    </li>

                    <li>
                      <Link to="/Admin/UsersManagement" className='linkStyle'>
                        <button>
                    <FiUsers /> <span> Users Management </span>
                        </button>
                    </Link>
                    </li>
                    <li>
                      <Link to= "/Admin/OfficeManagement" className='linkStyle'>
                      <button>
                    <ImOffice /> <span> Office Management </span>
                      </button>
                    </Link>
                    </li>
                    <li className='footerStyle'>

                    <Link to="" className='linkStyle'>
                      <button>
                        <VscSignOut/>
                        <span>   Sign Out </span>
                        
                        </button>
                      </Link>
                      

                    </li>
                </ul>
                </nav>
               
               
           
                
        </div>
        <div className='content'>
        
        <Routes>
                 
                 <Route path="/Admin/UsersManagement" element={<GETdata/>}/>
                 <Route path="/Admin/BuildingManagement" element={<BuildingManagementAdmin/>}/>
                 <Route path="/Admin/OfficeManagement" element={<OfficeManagementAdmin/>}/>
 
         </Routes>
         
         </div>
        </div>
        
  );
}
 
export default AdminJs ;