import React, {useState} from "react";
import "./style.css"
import callieWorkout from "./assets/workout.mp4"
function Classes () {
    const [isShown, setIsShown] = useState(false);
    return(
        <div>
        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/7da054b5d8a2335952bf6d69593d5eab839ab068/img_1668090753_e7b11bfc98c843b8b3b11e7f03786c6a.png"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={callieWorkout} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
    <div className="row-container">

<img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/907613559834a5f0d18a4298b5e39fd6c2929a9c/img_1655329713_512734444a224d5d92e06df7183e9104.jpg"alt="asd"/>

    <div className="thumbnail-info">
    <div className="class-title">5 min Cool Down Row</div>
    <div className="text-sm-1">Adrian Williams · Row</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
        </div>

        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/7da054b5d8a2335952bf6d69593d5eab839ab068/img_1668090753_e7b11bfc98c843b8b3b11e7f03786c6a.png"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={callieWorkout} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
    <div className="row-container">

<img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/907613559834a5f0d18a4298b5e39fd6c2929a9c/img_1655329713_512734444a224d5d92e06df7183e9104.jpg"alt="asd"/>

    <div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>

    <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/7da054b5d8a2335952bf6d69593d5eab839ab068/img_1668090753_e7b11bfc98c843b8b3b11e7f03786c6a.png"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={callieWorkout} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
    <div className="row-container">

<img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/907613559834a5f0d18a4298b5e39fd6c2929a9c/img_1655329713_512734444a224d5d92e06df7183e9104.jpg"alt="asd"/>

    <div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
        </div>

        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/7da054b5d8a2335952bf6d69593d5eab839ab068/img_1668090753_e7b11bfc98c843b8b3b11e7f03786c6a.png"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={callieWorkout} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
    <div className="row-container">

<img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/907613559834a5f0d18a4298b5e39fd6c2929a9c/img_1655329713_512734444a224d5d92e06df7183e9104.jpg"alt="asd"/>

    <div className="thumbnail-info">
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
        </div>
        </div>

        </div>
        
    )

}

export default Classes;