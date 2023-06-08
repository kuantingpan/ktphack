import React from "react";
import "./style.css"
import Logo from "./assets/logo.png";
import Bookmark from "./assets/save.png";
import Calendar from "./assets/calendar.png";
import Profile from "./assets/profile.png";
import Settings from "./assets/setting.png";

function Nav () {
    return(
       
        <nav>
 <div id="grad2"></div>
<div className="nav-left">
<img src={Logo} className="logo" alt="logo"/>

       <div className="item">Home</div>
        <div className="item">Workouts</div>
        <div className="item">Schedule</div>
        <div className="item">Feed</div>
        <div className="item">Challenges</div>
        </div>
      
        <div className="nav-right">
       
            <img className="nav-icon" src={Bookmark}/>  
        
   
            <img  className="nav-icon" src={Calendar}/>  
       <div  className="divider"></div>
           
            <img  className="nav-icon" src={Profile}/>  
    

            <img className="nav-icon" src={Settings}/>  
       
        </div>
       
        </nav>
    
    )

}

export default Nav;