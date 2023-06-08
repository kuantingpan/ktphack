import React from "react";
import "./style.css"
import avatar from "./assets/callie.png"
import callieWorkout from "./assets/workout.mp4"
import image from "./assets/callieheader.png"
import playIcon from "./assets/play.png"
import infoIcon from "./assets/info.png"
function Header () {
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
         </div>
         </div>
         </div>
    )

}

export default Header;