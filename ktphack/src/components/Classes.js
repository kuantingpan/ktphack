import React, {useState} from "react";
import "./style.css"
import sam from "./assets/sam.mp4"
import adrian1 from "./assets/adrian1.mp4"
import kristen from "./assets/kristen.mp4"
import ross from "./assets/ross.mp4"
import alex from "./assets/alex.mp4"
import lizzo from "./assets/lizzo.mp4"
import rad from "./assets/rad.mp4"
import adrian2 from "./assets/adriain2.mp4"
function Classes () {
    const [isShown, setIsShown] = useState(false);
    return(
        <div >
        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src={"https://s3.amazonaws.com/peloton-ride-images/e306706537582680407034d8a5e76aaa6546abc7/img_1666519518_d057817af1a747dbbf4103183f937688.png"} alt="samcycling"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={sam} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div classNaem="diff-container">
    <div className="int"></div>
    <div className="diff-text">Intermediate</div>
    </div>
    <div className="class-title">30 min 2010s Ride</div>
    <div className="text-sm-1">Sam Yo · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>

    <div className="row-container">
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/907613559834a5f0d18a4298b5e39fd6c2929a9c/img_1655329713_512734444a224d5d92e06df7183e9104.jpg"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={adrian1} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
<div classNaem="diff-container">
    <div className="int"></div>
    <div className="diff-text">Intermediate</div>
    </div>
    <div className="class-title">5 min Cool Down Row</div>
    <div className="text-sm-1">Adrian Williams · Cycling</div>
    <div className="text-sm">Fri 2/24/23 @ 9:30 AM</div>
    </div>
    </div>
  
        </div>
        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/b732e14c355a53ec769fc8173712dec0671077ee/img_1669035902_4b8bb13d50ab49f68779e17e5c768d1b.png" alt="yoga"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={kristen} alt="yoga"type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div classNaem="diff-container">
    <div className="beg"></div>
    <div className="diff-text">Beginner</div>
    </div>
    <div className="class-title">30 min Yoga Flowe</div>
    <div className="text-sm-1">Kristin McGee · Yoga</div>
    <div className="text-sm">Thu 2/23/23 @ 11:30 AM</div>
    </div>
    </div>

    <div className="row-container">
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/3a4b946bcd97f2fceed86759cf85a7ab0ccb1ecd/img_1681564569_fd1babc4d2f04c1fa6c3fe0545e51d6f.png" alt="yoga"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={ross} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
<div classNaem="diff-container">
    <div className="beg"></div>
    <div className="diff-text">Beginner</div>
    </div>
    <div className="class-title">30 min Morning Yoga Flow</div>
    <div className="text-sm-1">Ross Rayburn · Yoga</div>
    <div className="text-sm">Thu 2/23/23 @ 4:30 APM</div>
    </div>
    </div>
  
        </div>

        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/9bcd3ee99639d5e8e84e7be7c4cfe0fe6854e380/img_1680738372_563668702ea242d990ef2b6d24e33fc6.png" alt="alexrun"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={alex} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div classNaem="diff-container">
    <div className="hard"></div>
    <div className="diff-text">Advanced</div>
    </div>
    <div className="class-title">20 min HIIT Run</div>
    <div className="text-sm-1">Alex Toussaint · Running</div>
    <div className="text-sm">Wed 2/22/23 @ 10:00 AM</div>
    </div>
    </div>

    <div className="row-container">
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/36388e9c1e0c91545c6bca0a20627098b76d8cce/img_1680359678_a65a6057db3d4956ace2fa26981e6c39.png" alt="lizzoride"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={lizzo} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div className="class-title">30 min Lizzo Two for One Ride</div>
    <div className="text-sm-1">Jess & Robin · Cycling</div>
    <div className="text-sm">Wed 2/22/23 @ 7:00 AM</div>
    </div>
    </div>
  
        </div>
        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/862b64461d3f8219561040271d33f77bf4735750/img_1664294401_34cb5f3efe554d768fdc7e6559ef0ed9.png" alt="radstrength"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={rad} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
    <div classNaem="diff-container">
    <div className="hard"></div>
    <div className="diff-text">Advanced</div>
    </div>
    <div className="class-title">20 min Chest & Back Strength</div>
    <div className="text-sm-1">Rad Lopez · Strength</div>
    <div className="text-sm">Mon 2/20/23 @ 7:00 AM</div>
    </div>
    </div>

    <div className="row-container">
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/fae416999b163cf41ac3f5cead586af6e8a8e3ec/img_1681819204_7a38fe56ba3443bba5c07930d82aaa90.png" alt="afrianstrength"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src={adrian2} type="video/mp4"/>
     </video>
     )}
        
        </div>         

<div className="thumbnail-info">
<div classNaem="diff-container">
    <div className="int"></div>
    <div className="diff-text">Intermediate</div>
    </div>
    <div className="class-title">20 min Strength Roll Call: Glutes</div>
    <div className="text-sm-1">Adrian Williams · Strength</div>
    <div className="text-sm">Tue 4/18/23 @ 7:30 AM</div>
    </div>
    </div>
  
        </div>
        </div>
        
    )

}

export default Classes;