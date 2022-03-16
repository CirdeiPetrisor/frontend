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
import {FiArrowDown} from 'react-icons/fi'
import Popup from "../pages/Popup.jsx";
import {useState} from 'react';
import inputsOfUser from "../css/inputsOfUser.css";
//import './App.css';
class GETdata extends React.Component {
    // Constructor 
    
     
   //const [buttonPopup,setButtonPopup] = useState(false);
    
    constructor(props) {
        super(props);
     
     this.date={
        firstName:"",
        lastName:"",
        role:"",
        email:"",
        password:"",
        gender:"",
        nationality:"",
        active:false
     }; 
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            DataisLoaded: false,
          
        };
       
    }
     
    handleChange(event) {    this.setState({lastName: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
        
     
    
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
      
        fetch("https://79.112.136.226:8011/api/User/",{mode:'cors'},{credentials:'include'})
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
           
               <li className="lisidebar" >
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

                  
                 <li className="lisidebar">
                   <Link to="/Admin/BuildingManagement" className='linkStyle'>
                     <button>
                 <FaRegBuilding /> <span> Building Management </span>
                 </button>
                   </Link>

                 </li>

                 <li className="lisidebar">
                   <Link to="/Admin/UsersManagement" className='linkStyle'>
                     <button style={{color:"rgba(167, 204, 206, 1)"}}>
                 <FiUsers /> <span> Users Management </span>
                     </button>
                    
                 </Link>
                 </li>
                 <li className="lisidebar">
                   <Link to= "/Admin/OfficeManagement" className='linkStyle'>
                   <button>
                 <ImOffice /> <span> Office Management </span>
                   </button>
                 </Link>
                 </li>
                 <li className='footerStyle'>

                 <Link to="/" className='linkStyle'>
                   <button>
                     <VscSignOut/>
                     <span>   Sign Out </span>
                     
                     </button>
                   </Link>
                   

                 </li>
             </ul>
             </nav>
            
            
        
             
     </div>
     <div className="datainputs"> 
                    
                    
                   <label className="fieldName"> First name  <input  className="inputset" type="text" value={this.date.firstName} onChange={this.handleChange} />  </label>
                     
                    
                    
                    <label className="fieldName"> Last name <input  className="inputset" type="text" value={this.date.lastName} /> </label>
                     
                   
                    <label className="fieldName">Email  <input  className="inputset" type="text" value={this.role} onChange={this.addressChange}/> </label>
                     
                    <label className="fieldName">Role  <input  className="inputset" type="text" value={this.email} onChange={this.addressChange}/></label>
                    
                    <label className="fieldName">Password  <input  className="inputset" type="password" value={this.password} onChange={this.addressChange}/> </label>
                    <label className="fieldName">Gender  <input  className="inputset" type="text" value={this.gender} onChange={this.addressChange}/> </label>
                    <label className="fieldName">Nationality  <input  className="inputset" type="text" value={this.nationality} onChange={this.addressChange}/> </label>
                    <label className="fieldName">Active  <input  className="inputset" type="text" value={this.active} onChange={this.addressChange}/> </label>
          </div>
            
                <div className="settingButtonsDiv">
                    <button className="settingsButtons" onClick={console.log(this.date.firstName) }> Add</button>
                    <button className="settingsButtons">Modfiy</button>
                    <button className="settingsButtons">Deactivate</button>
                    <button className="settingsButtons">Re-activate</button>
                   
                 </div>
                 <Popup trigger={false} setTrigger={CONSOLESHOW(this.date)}>
                        <h3>My poopup</h3>
                        <p>This is my button</p>
                    </Popup>  
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
                    <tr key = { item.id} >
                        
                        <td> { item.first_name +" "+item.last_name }</td> 
                         <td>  { item.email }</td>
                         <td>Building</td>
                         <td>Office</td>
                         <td> Yes/No</td>
                         <td>{item.role}</td>
                         <td>{item.gender}</td>
                         <td>{item.nationality}</td>
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
 
function CONSOLESHOW( item)
{
    console.log(item);
}
function Post(buildingName,flors){

  
  
   
              //  console.warn({id,name,email,password});
              //  let data={id,name,email,password}
               fetch('https://79.112.136.226:8011/api/User/', {method: 'POST',
              
               headers:{'Content-type':'application/json','Accept':'Application/json'},
               
               body:JSON.stringify(
                   //data
                   {
                        id:4,
                        first_name:buildingName,
                       last_name:flors,
                       role: " ",
                       email: " ",
                       password:" ",
                       gender: " ",
                       nationality: " ",
                       active: true
                      
                      
                   }
               )
           }).then(resp=>{
               //console.warn("result:",result);
              resp.json().then((result)=>
              {    
                   
                   console.warn("result",result)
                   
                   
              })   
                  
       })


   
   
  }
export default GETdata;

