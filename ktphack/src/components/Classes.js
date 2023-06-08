import React, {useState} from "react";
import "./style.css"
function Classes () {
    const [isShown, setIsShown] = useState(false);
    return(
        <div>
        <div className="col">
            <div className="row-container" style={{marginRight:12}}>
  <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
        <img className="thumbnail" src="https://s3.amazonaws.com/peloton-ride-images/e306706537582680407034d8a5e76aaa6546abc7/img_1666519518_d057817af1a747dbbf4103183f937688.png" alt="samcycling"/>
{isShown && (
     <video loop autoplay="" muted className="header-video">
     <source src="https://sneakpeek.akamaized.net/previews/classes/cycling/2022/09/24/09242022-sam_yo-0200pm-drastic-1-989bdee775c6406c8fd79ae395791946/09242022-sam_yo-0200pm-drastic-1-989bdee775c6406c8fd79ae395791946.webm?hdnts=exp=1686220594~acl=/previews/classes/cycling/2022/09/24/09242022-sam_yo-0200pm-drastic-1-989bdee775c6406c8fd79ae395791946/*~hmac=b151c35a8cde8ec1829ddbf249bd797f74ec526010fd05cffd79b66fa95bf468" type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/caesar/2022/11/22/11222022-adrian_williams-0608pm-drastic-1-2940f126c4874f61837e7eeee268fb0e/11222022-adrian_williams-0608pm-drastic-1-2940f126c4874f61837e7eeee268fb0e.webm?hdnts=exp=1686216122~acl=/previews/classes/caesar/2022/11/22/11222022-adrian_williams-0608pm-drastic-1-2940f126c4874f61837e7eeee268fb0e/*~hmac=a2f36e5a65f4c1d4b27afd4b1a8e973a6ce91647b792f9e4b985eaa169abb72b" type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/yoga/2022/11/21/11212022-kristin_mcgee-0730am-drastic-2-9e5e45d77f094006bce15fd3aaa8a0ec/11212022-kristin_mcgee-0730am-drastic-2-9e5e45d77f094006bce15fd3aaa8a0ec.webm?hdnts=exp=1686218073~acl=/previews/classes/yoga/2022/11/21/11212022-kristin_mcgee-0730am-drastic-2-9e5e45d77f094006bce15fd3aaa8a0ec/*~hmac=2fe3232b67a9e547f8237a759bfb66d3d19ed7c2ffec1e4e0b37ff5269523a2b" alt="yoga"type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/yoga/2023/04/15/04152023-ross_rayburn-0830am-drastic-1-35c2e6695eb54ac1b7538f74d28e1d3e/04152023-ross_rayburn-0830am-drastic-1-35c2e6695eb54ac1b7538f74d28e1d3e.webm?hdnts=exp=1686218197~acl=/previews/classes/yoga/2023/04/15/04152023-ross_rayburn-0830am-drastic-1-35c2e6695eb54ac1b7538f74d28e1d3e/*~hmac=c8dda575cff36cd6cb7b3c674d07f55f0584966b8098c02582db3387ee89bd05" type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/running/2023/04/05/04052023-alex_toussaint-0700pm-drastic-1-8903728c84874feeb9016f2ffa44ebdc/04052023-alex_toussaint-0700pm-drastic-1-8903728c84874feeb9016f2ffa44ebdc.webm?hdnts=exp=1686218414~acl=/previews/classes/running/2023/04/05/04052023-alex_toussaint-0700pm-drastic-1-8903728c84874feeb9016f2ffa44ebdc/*~hmac=07b9bafa5298772697dfc9bfa47cbba694e5ae0a5f33eaa6131e6017edd61490" type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/cycling/2022/07/15/07152022-jess_sims,_robin_arzon-1200pm-drastic-2-e9f57103df9f4c2fb499efbf5d0cfa32/07152022-jess_sims,_robin_arzon-1200pm-drastic-2-e9f57103df9f4c2fb499efbf5d0cfa32.webm?hdnts=exp=1686219089~acl=/previews/classes/cycling/2022/07/15/07152022-jess_sims,_robin_arzon-1200pm-drastic-2-e9f57103df9f4c2fb499efbf5d0cfa32/*~hmac=51a0fd1d229aab2f7e10e11e56b249070e3b48ce25e39bf78eb9356e19c4f6c2" type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/strength/2022/09/27/09272022-rad_lopez-1126am-drastic-1-5a163c190ca74a1ab483871304ebd663/09272022-rad_lopez-1126am-drastic-1-5a163c190ca74a1ab483871304ebd663.webm?hdnts=exp=1686219722~acl=/previews/classes/strength/2022/09/27/09272022-rad_lopez-1126am-drastic-1-5a163c190ca74a1ab483871304ebd663/*~hmac=e02f3775ee1e05d0d1dc66c66726b7287d75286cb5c7bb15217fab8380ceda0e" type="video/mp4"/>
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
     <source src="https://sneakpeek.akamaized.net/previews/classes/strength/2023/04/18/04182023-adrian_williams-0730am-drastic-1-9d59f65c50454c0f9147fb6744c079b5/04182023-adrian_williams-0730am-drastic-1-9d59f65c50454c0f9147fb6744c079b5.webm?hdnts=exp=1686220043~acl=/previews/classes/strength/2023/04/18/04182023-adrian_williams-0730am-drastic-1-9d59f65c50454c0f9147fb6744c079b5/*~hmac=8425851162eaf4a62c2054f7a57272c4292c0a4bf1bad1f364019729590c2811" type="video/mp4"/>
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