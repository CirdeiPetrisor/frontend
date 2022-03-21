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
import {useTable,useRowSelect} from 'react-table';

//import './App.css';
class GETdata extends React.Component {
    // Constructor 
    
     
   //const [buttonPopup,setButtonPopup] = useState(false);
    
    constructor(props) {
        super(props);
      
    
       
     
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeLastName=this.handleChangeLastName.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangePassword=this.handleChangePassword.bind(this);
    this.handleChangeGender=this.handleChangeGender.bind(this);
    this.handleChangeRole=this.handleChangeRole.bind(this);
    this.handleChangeNationality=this.handleChangeNationality.bind(this);
    this.handleChangeActive=this.handleChangeActive.bind(this);


        this.state = {
            items: [],
            DataisLoaded: false,
            firstName:"",
            lastName:"",
            role:"",
            email:"",
            password:"",
            gender:"",
            nationality:"",
            active:false,
            
        };
        
       
    }
    
    handleChange(event) {    this.setState({firstName: event.target.value,
      // lastName: event.target.value,
      // role: event.target.value,
      // email: event.target.value,
      // password: event.target.value,
      // gender: event.target.value,
      // nationality: event.target.value,
      // active: event.target.value,
      

    });  }
    handleChangeLastName(event)
    {
      this.setState(
        {
          lastName:event.target.value
        }
      )
    }
    
    handleSubmit(event) {
      Post(this.state.firstName,this.state.lastName,this.state.role,this.state.email,this.state.password,this.state.gender,this.state.nationality,Boolean(this.state.active));
      console.log(this.state.role)
      console.log(Boolean(this.state.active))
     
      event.preventDefault();
    }
    handleChangeRole(event)
    {
      this.setState(
        {
          role:event.target.value
        }
      )
    }
    handleChangeEmail(event)
    {
      this.setState(
        {
          email:event.target.value
        }
      )
    }
    handleChangeNationality(event)
    {
      this.setState(
        {
          nationality:event.target.value
        }
      )
    }
    handleChangePassword(event)
    {
      this.setState(
        {
          password:event.target.value
        }
      )
    }
    handleChangeGender(event)
    {
      this.setState(
        {
          gender:event.target.value
        }
      )
    }
    handleChangeActive(event)
    {
      this.setState(
        {
          active:event.target.value
        }
      )
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
                 Logged In as:
               </a>
               <br/>
               <a></a>
               
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
     <form className="datainputs"> 
                    
                    
                   <label className="fieldName"> First name  <input  className="inputset" type="text" value={this.state.firstName}  onChange={this.handleChange} />  </label>      
                    
                    
                    <label className="fieldName"> Last name <input  className="inputset" type="text" value={this.state.lastName} onChange={this.handleChangeLastName} /> </label>
                     
                   
                    <label className="fieldName">Email  <input  className="inputset" type="text" value={this.state.email} onChange={this.handleChangeEmail}/> </label>
                     
                    <label className="fieldName">Role  <input  className="inputset" type="text" value={this.state.role} onChange={this.handleChangeRole}/></label>
                    
                    <label className="fieldName">Password  <input  className="inputset" type="password" value={this.state.password} onChange={this.handleChangePassword}/> </label>

                    <label className="fieldName">Gender  <input  className="inputset" type="text" value={this.state.gender} onChange={this.handleChangeGender}/> </label>

                    <label className="fieldName">Nationality  <input  className="inputset" type="text" value={this.state.nationality} onChange={this.handleChangeNationality}/> </label>

                    <label className="fieldName">Active  <input  className="inputset" type="boolean" value={this.state.active} onChange={this.handleChangeActive}/> </label>
          </form>
            
                <div className="settingButtonsDiv">
                    <button className="settingsButtons" onClick={this.handleSubmit }> Add</button>
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
function Post(firstName,lastName,role,email,password,gender,nationality,active){

  //this is a text
  
   
              //  console.warn({id,name,email,password});
              //  let data={id,name,email,password}
               fetch('https://79.112.136.226:8011/api/User/', {method: 'POST',
              
               headers:{'Content-type':'application/json','Accept':'Application/json'},
               
               body:JSON.stringify(
                   //data
                   {
                        id:4,
                        first_name:firstName,
                       last_name:lastName,
                       role: role,
                       email: email,
                       password:password,
                       gender: gender,
                       nationality: nationality,
                       active: active
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

