import React from "react";
import { useState } from "react";
import "./style.css"
import avatar from "./assets/callie.png"
import callieWorkout from "./assets/callieWorkout.mp4"
import image from "./assets/callieheader.png"
import playIcon from "./assets/play.png"
import infoIcon from "./assets/info.png"
import mute from "./assets/volume-mute.png"
import unMute from "./assets/volume-low.png"
function Header () {
    const [name, setName] = useState(mute);

    const changeName = () => {
      let value = name;
  
      if (value === mute) {
        setName(unMute);
      } else {
        setName(mute);
      }
    };
    return(
        <div className="header-container">
            <video loop autoplay="" poster={image} muted className="header-image">
            <source src={callieWorkout} type="video/mp4"/>
            </video>
            <div id="grad"></div>
            <div className="header-info">
             <div className="time">
                <div className="label">Encore</div>
            <div className="date">Sun 5/28/23 8:00 AM</div>
            </div>   
           
            <div className="header-title">10 min Core Strength</div>
            <div>
                <div className="instructorAvatar">
                    <img className="avatar" src={avatar}/>
                    <div className="instructor"> Callie Gullickson · Strength</div>
                   </div>
            </div>
         <div className="btn-group">
         <div> 
         <button className="primary"><img src={playIcon} className="icon"/>Start</button>
         </div> 
         <div > 
         <button className="secondary"><img src={infoIcon} className="icon"/>More Info</button>
         </div>

         <div onClick={changeName}>
        
            <img  className="mute"src={name}/>
         </div>
         </div>
         </div>
         </div>
    )

}

export default Header;