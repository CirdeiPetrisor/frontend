import React from "react";
import {AiOutlineHome} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {FaRegBuilding} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {ImOffice} from "react-icons/im";
import {VscSignOut} from "react-icons/vsc";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { BrowserRouter as Router ,Routes ,Route ,Link,NavLink, BrowserRouter} from 'react-router-dom';
import AdminStyle from '../css/AdminStyle.css'
//import './App.css';
class BuildingManagementAdmin extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://localhost:7294/api/User",{mode:'cors'},{credentials:'include'})
            .then((res) => res.json())
            .then((json) => {this.setState({
                    items: json,
                    DataisLoaded: true });
            })
    }
    render() {
     const { DataisLoaded, items } = this.state;
             if (!DataisLoaded) 
                 return ( <div>
            <h1> Pleses wait some time.... </h1> 
            </div>  )
   
        return (
        <div >
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
                 <a>
                 <AiOutlineHome/> <i>General</i>
                 </a >
                 <div className='generalChildren'>
                     <a>Desk Assignment</a>
                     <br/>
                     <a>Remote work approval</a>
                     </div>
                 </li>

                   <li>
                   <a>
                 <FiSettings /> <i> Settings </i>
                 </a>
                 </li>
                 <li>
                   <Link to="/Admin/GetData" className='linkStyle'>
                 <FaRegBuilding /> <i> Building Management </i>
                   </Link>

                 </li>

                 <li>
                   <a>
                 <FiUsers /> <i> Users Management </i>
                 </a>
                 </li>
                 <li>
                   <a>
                 <ImOffice /> <i> Office Management </i>
                 </a>
                 </li>
                 <li className='footerStyle'>

                 <a>
                     <VscSignOut/>
                     <i>   Sign Out </i>
                   </a>
                   

                 </li>
             </ul>
             </nav>
            
            
        
             
     </div >
              
               
            
                <div className="settingButtonsDiv">
                    <button className="settingsButtons"> Add</button>
                    <button className="settingsButtons">Modfiy</button>
                    <button className="settingsButtons">Deactivate</button>
                    <button className="settingsButtons">Re-activate</button>
                 </div>
                <br/>
                <br/>
                <div className="content">
                <table>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Building</th>
                            <th>Office</th>
                            <th>Works Remote</th>
                            <th>Desk</th>
                            <th>Gender</th>
                            <th>Nationality</th>
                        </tr>
                       
                         {
                    
                    items.map((item) => ( 
                    <tr key = { item.id } >
                        
                        <td> { item.name }</td> 
                         <td>  { item.email }</td>
                         <td>Building</td>
                         <td>Office</td>
                         <td> Yes/No</td>
                         <td>1,2,3</td>
                         <td>Male/Female</td>
                         <td>Nationality</td>
                        {/* <td>Password: { item.password } </td> */}
                     
                    </tr>
                    ))
                    
                }
                     </table>
            </div>
      </div>
    );
}
}
   
export default BuildingManagementAdmin;