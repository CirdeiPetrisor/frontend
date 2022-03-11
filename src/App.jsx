import logo from './logo.svg';
import pic from "./LogIn/design-office.jpg";
import React from 'react';
import './App.css';
import  "./LogIn/LogIn.css";
import {useEffect, useState } from 'react';



    
    


function App() {
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    var bool=false;
    

    let saveData=()=>
     {
                 console.warn({id,name,email,password});
                 let data={id,name,email,password}

                 try{
               fetch(`https://localhost:7294/api/User/${encodeURIComponent(data.email)}/${encodeURIComponent(data.password)}`, {method: 'GET',
                
                 headers:{'Content-type':'application/json','Accept':'Application/json'},
                 
                 
             }).then(resp=> resp.text()).then(resp =>
                {

                        console.log(resp);
                      

                    if(resp==='"User neexistent!"')
                    {
                        alert('"User neexistent"');
                    }
                    else if(resp==='"Parola incorecta"')
                    {
                        alert('Parola incorecta')
                    }
                    else{
                        alert('"Ai fost logat cu succes"')

                    }

                }
             )
        }
        catch(error)
        {
            console.log(error);
        }
        
        
        try{
            fetch(`https://localhost:7294/api/User/${encodeURIComponent(data.email)}/${encodeURIComponent(data.password)}`, {method: 'GET',
             
              headers:{'Content-type':'application/json','Accept':'Application/json'},
             
              
          }).then(resp=> resp.json()).then(resp=>
          {
                console.log(resp.password)
                
                data.id=resp.id;
                data.name=resp.name;
                data.email=resp.email;
                data.password=resp.password;
          }
          )
        }
     catch(error)
     {
         console.log(error);
     }
 
}




  return (
      <React.StrictMode>
    <div className="loginbox">
        <div className="child1">
          <span className="paragraph">Office Space Management</span>
          <img className="image" src={pic} alt="imagine birouri"/>

            <div className="child2">
                    <p className="wellcome">Welcome</p>
                    <ul style={{top :170}}>
                                    <li>
                                    
                                    <p style={{paddingBottom:30, marginRight : 400 , width: 200 }}> Log In to your account </p>
                                    </li>
                                    
                                    <span > Email</span>
                                    <li >
                                        <input type="text" name="Email" style={{color:'grey' }} placeholder="example@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </li>
                                    
                                    
                                        <hr/> 
                                    
                                    
                                    <span>Password</span>
                                    <li >
                                        <input type="password" name="Password" placeholder="Password" style={{color:'grey'}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
                                    </li>
                                   
                                        <hr/>
                                    
                                    
                                    <li>
                                        <button className="logInButton" onClick={saveData} >
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