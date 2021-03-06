import React, { useState } from "react";
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
import inputDataBuilding from "../css/inputDataBuilding.css";
//import './App.css';
class BuildingManagementAdmin extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        
        
        this.state = {
            items: [],
            DataisLoaded: false,
            buildingName:'',
            buildingFloors:'',
            buuildingAddress:''


        };
    }
      nameChange=(e)=>
      {
        this.setState({buildingName:e.target.value})
      }
      floorsChange=(e)=>
      {
        this.setState({buildingFloors:e.target.value})
      }
      addressChange=(e)=>
      {
        this.setState({buuildingAddress:e.target.value})
      }





    
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

               <li className="lisidebar">
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
                 <li className="lisidebar">
                   <Link to="/Admin/BuildingManagement" className='linkStyle' >
                     <button    style={{color:'rgba(167, 204, 206, 1)'}} >
                 <FaRegBuilding /> <span> Building Management </span>
                 </button>
                   </Link>

                 </li>

                 <li className="lisidebar"> 
                   <Link to="/Admin/UsersManagement" className='linkStyle'>
                     <button>
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
                    
                       <div>
                      <div className="fieldName">  <i className="spansat" >Building name</i></div> <input type="text" value={this.state.buildingName} onChange={this.nameChange}></input>  
                        </div>
                       
                       <div>
                       <div className="fieldName">  <i className="spansat" >Floors count</i></div> <input type="text" value={this.state.buildingFloors} onChange={this.floorsChange}></input>
                        </div>
                       <div>
                       <div className="fieldName">  <i className="spansat" >Building address</i></div> <input type="text" value={this.state.buuildingAddress} onChange={this.addressChange}></input>
                        </div>
                      
                     
              </div>

              <div className="settingButtonsDiv">
                
                 
                
                    <button className="settingsButtons" onClick={Post(this.state.buildingName,this.state.buildingFloors,this.state.buuildingAddress)}> Add</button>
                    <button className="settingsButtons">Modfiy</button>
                    <button className="settingsButtons">Remove</button>

             </div>
                <br/>
                <br/>
                
              <div className="content">
                <table>
                        <tr>
                            <th>Building name</th>
                            <th>Floors count</th>
                            <th>Offices</th>
                            <th>Desks</th>
                            <th>Building address</th>
                            <th>Occupied offices</th>

                        </tr>

                         {

                    items.map((item) => (
                        //Aici trebuie sa completezi cu item.buildingName sau id 
                    <tr key = { item.id } >
                          
                        <td> { item.name }</td>
                         <td>  { item.email }</td>
                         <td>Building</td>
                         <td>Office</td>
                         <td> Yes/No</td>
                         <td>1,2,3</td>
                       
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

function Post(buildingName,flors,address){

  // const [id,setId]=useState(" ");
  // const [name,setName]=useState(" ");
  // const [email,setEmail]=useState(" ");
  // const [password,setPassword]=useState(" ");
 
  
   
              //  console.warn({id,name,email,password});
              //  let data={id,name,email,password}
               fetch('https://79.112.136.226:8011/api/User/', {method: 'POST',
              
               headers:{'Content-type':'application/json','Accept':'Application/json'},
               
               body:JSON.stringify(
                   //data
                   {
                        id:4,
                       name:buildingName,
                       email:flors,
                       password:address
                      //  flors:flors, 
                      //  address:address
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




export default BuildingManagementAdmin;