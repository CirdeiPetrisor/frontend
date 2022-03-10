import logo from './logo.svg';
import pic from "./LogIn/design-office.jpg";
import React from 'react';
import './App.css';
import  "./LogIn/LogIn.css";

function App() {
  return (
      <React.StrictMode>
    <div className="loginbox">
        <div className="child1">
          <span className="paragraph">Office Space Management</span>
          <img className="image" src={pic} alt="imagine birouri"/>

            <div className="child2">
                    <p className="wellcome">Wellcome</p>
                    <ul style={{top :170}}>
                                    <li>
                                    
                                    <p style={{paddingBottom:30, marginRight : 400 , width: 200 }}> Log In to your account </p>
                                    </li>
                                    
                                    <span > Email</span>
                                    <li >
                                        <input type="text" name="Email" style={{color:'grey' }} placeholder="example@gmail.com"/>
                                    </li>
                                    
                                    
                                        <hr/> 
                                    
                                    
                                    <span>Password</span>
                                    <li >
                                        <input type="password" name="Password" value="Password "placeholder="Password" style={{color:'grey'}}/> 
                                    </li>
                                   
                                        <hr/>
                                    
                                    
                                    <li>
                                        <button className="logInButton" >
                                            Log In
                                        </button>
                                    </li>
                                    
                                    <li>
                                        <span className="forgot">Forgot password?</span> <span/><a href="./filaTemporara.html">Recover</a>
                                    </li>
                    </ul>
            </div>
      
        </div>
    </div>
    </React.StrictMode>
  
);}


 export default App;


//import React, {useState, useEffect } from 'react'


// function App() {

//    const [postIdm, setPostId] =useState(null);


// useEffect(async ()=>
// {

//     const requestOptions=
//     {
//         method:'POST',
//         Headers:{'Content-Type':'application/json'},
//         body: JSON.stringify({title: 'React Hooks POST Request Example'})

// };
//     const response =await fetch('https://localhost:7294/api/User',requestOptions);
//     const data= await response.json();
//     setPostId(data.id);
// },[]);
    ///////////////////////////////////////////////////////////////////
// fetch('https://localhost:7294/api/User)
// .then(res => 
//     {
//     if(res.ok)
//     {
//         console.log("Succes")
//     }
//     else{console.log("FAIL pUla")}


//     })
// .then(data => console.log(data))
// .catch(error => console.log('Error'))

///////////////////////////////////////////////    

//         return(

//             <div>
//                 <h3>
//                     Random text
//                 </h3>
//                 <div> postId with async/await: {postId}</div>
//             </div>
//         );
    
// }

//export  { App };