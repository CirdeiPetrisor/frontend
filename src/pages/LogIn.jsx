
import pic from "../LogIn/design-office.jpg";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import  "../LogIn/LogIn.css";
import {useEffect, useState } from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter as Router ,Routes ,Route, Link } from 'react-router-dom';
import AdminJs from "./AdminJs";
let TriggerVariable=false;
    

const LogIn=()=> {
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   
    
    let history=useNavigate();
   
     
    function goToAdmin()
    {   
        history('/Admin')
       }

       

    function saveData()
     {  
    if(password.length>0&& email==="")
     {
         alert("Introduceti mailul");
     }
     else
     if(email.length>0&&password==="")
     {
         alert("introduceti parola");
     }
     else

         if(password===""&&email==="")
         {
             alert("email si parola neintroduse")
         }else
         {
                 console.warn({id,name,email,password});
                 let data={id,name,email,password}
              
                 try{
               fetch(`https://79.112.136.226:8011/api/User/${encodeURIComponent(data.email)}/${encodeURIComponent(data.password)}`, {method: 'GET',
                
                 headers:{'Content-type':'application/json','Accept':'Application/json'},
                 
                 
             }).then(resp=> resp.text()).then((resp) =>
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
                    else if (resp==='"User sau parola lipsa!"')
                    {
                        alert('User sau parola lipsa!')
                    }
                    
                    else{
                        alert('"Ai fost logat cu succes"')
                        TriggerVariable=true;
                            goToAdmin();
                    }

                }
             )
        }
        catch(error)
        {
            console.log(error);
        }
        
        
        try{
            fetch(`https://79.112.136.226:8011/api/User/${encodeURIComponent(data.email)}/${encodeURIComponent(data.password)}`, {method: 'GET',
             
              headers:{'Content-type':'application/json','Accept':'Application/json'},
             
              
          }).then(response=> response.json()).then(response=>
          {
              
                
                
                data.id=response.id;
                data.name=response.name;
                data.email=response.email;
                data.password=response.password;
                console.log(response)
          }
          )
        }
     catch(error)
     {
         console.log(error);
     }
    }
}


  return (
      
      <React.StrictMode>
        
    <div className="loginbox">
        <div className="child1">
          <span className="paragraph">Office Space Management</span>
          <img className="image" src={pic} alt="imagine birouri"/>

            <div className="child2">
                  
                    <ul style={{top :80}}>
                                    <li>
                                    <p style={{fontSize:40,color:'black'}}>Wellcome</p>
                                    <p style={{paddingBottom:30, marginRight : 400 , width: 200,fontSize:15 }}> Log In to your account </p>
                                    </li>
                                    
                                    <span > Email</span>
                                    <li >
                                        <input type="text" name="Email" style={{color:'grey',border:0,width:400}} placeholder="example@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </li>
                                    
                                    
                                        <hr/> 
                                    
                                    
                                    <span>Password</span>
                                    <li >
                                        <input type="password" name="Password" placeholder="Enter your password" style={{color:'grey',border:0,width:400}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
                                    </li>
                                   
                                        <hr/>
                                    
                                    
                                    <li>
                                        
                                        <button className="logInButton" onClick={()=>{ saveData()}}  >
                                            Log In
                                        </button>
                                        
                                    </li>
                                    
                                    <li>
                                        <span className="forgot" >Forgot password?</span> <span/><a href="./filaTemporara.html">Recover</a>
                                    </li>
                    </ul>
                    
            </div>
            
        </div>
     
    </div>
    
    </React.StrictMode>
    
);
 
       

}


 export default LogIn;
