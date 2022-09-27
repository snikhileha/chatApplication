import React, { useState } from 'react'
import "./Join.css";
import logo from '../../images/chatSymbol.jpg'
import {Link} from 'react-router-dom';

let user;

const sendUser= ()=>{
    user = document.getElementById("joinInput").value;
    document.getElementById('joinInput').value="";
}

export default function Join() {
    const [name, setName] = useState("");
    

   
  return (
    <div className="JoinPage">
        <div className="JoinContainer">
            <img src={logo} alt=""/>
            <h1>C Chat</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} id="joinInput" />
           

           <Link onClick={(event)=>!name ? event.preventDefault():null} to="/chat">
             <button onClick={sendUser} className="joinbtn">LogIn</button></Link>

        </div>
       
    </div>
    )
}

export {user}