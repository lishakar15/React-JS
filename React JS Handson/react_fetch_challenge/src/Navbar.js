import React from 'react';
import { useState } from 'react';
import Content from './Content';
import "./Navbar.css";


const Navbar = () =>{

    const [activeTab,setActiveTab] = useState("users");

    const handleClick = (buttonName)=>{
        console.log("Activetab = "+buttonName);
        setActiveTab(buttonName);
    }

    return (
        <div>
            <div className="container">
                <button className ="userBtn" onClick={()=>handleClick("users")}>users</button>
                <button className ="postBtn" onClick={()=>handleClick("posts")}>posts</button>
                <button className ="commentsBtn" onClick={()=>handleClick("comments")}>comments</button>
            </div>
            <Content activeTab={activeTab}/>
        </div>
    )

}

export default Navbar;