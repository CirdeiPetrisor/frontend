import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useState } from 'react';

function Post(){

   const [id,setId]=useState("");
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
  
   let saveData=()=>
    {
                console.warn({id,name,email,password});
                let data={id,name,email,password}
                fetch('https://localhost:7294/api/User', {method: 'POST',
               
                headers:{'Content-type':'application/json','Accept':'Application/json'},
                
                body:JSON.stringify(
                    //data
                    {
                        email:data.email,
                        password:data.password
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

        
            return(
                <React.StrictMode>
            <div>
                <h2>Please enter Employee details</h2>
                <p>
                    <label>Employee ID: <input type='text' name="id" value={id} onChange={(e)=>{setId( parseInt(e.target.value))}} /> </label>
                </p>
                <p>
                    <label>Name: <input type='text' name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> </label>
                </p>
                <p>
                    <label>Email: <input type='text'name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> </label>
                </p>
                <p>
                    <label>Password: <input type='text' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  /> </label>
                </p>
                
                
            </div>
                <p>
                    <button type ="button" onClick={saveData}> POST DATA</button>
                </p>
            </React.StrictMode>
            );
    
}

export default Post;