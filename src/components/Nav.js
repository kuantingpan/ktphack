import React from "react";
import "./style.css"
import  Logo from "./assets/logo.png";

function Nav () {
    return(
        <nav>
       
         <img src={Logo} class="logo" />  
      
       
        <ul>Home</ul>
        <ul>Workouts</ul>
        <ul>Schedule</ul>
        <ul>Feed</ul>
        <ul>Challenges</ul>
        </nav>
    
    )

}

export default Nav;