import React, { useEffect, useState } from 'react';
import staticImage from "./next.png"
import {Entity} from 'aframe-react';
import "./index.css"

const SingleScene=(props)=>{
    const [hotspots ,setHotspots]=useState("")
    const {singleScene1,selectHotspots,data1,stateMap}=props
   const {sceneimage,hotspot}=singleScene1
   const {hotspotData}=data1
   
   const hello=()=>{
      console.log("hotspot_id")
   }
   const helloHover=()=>{
      console.log("Hello")
   }
  
 
    return(
    <div className='scene-container'>
       
    <a-scene embedded={true} raycaster="objects: [data-raycastable]">
    <a-sky  src={sceneimage}  clickable></a-sky>
    <a-camera id="camera">
    <a-cursor colo="red" world-pos  fuse="true" fusetimeOut="3000"></a-cursor>
    </a-camera>
    <Entity  position="0 16 -1"  height="0.5" look-at="[camera]" width="0.5"  primitive='a-image'src="https://cdn.glitch.me/2087dfa6-bd02-4451-a189-36095a66f386%2Fup-arrow.png" />
    <Entity  position={hotspots}  height="0.1" look-at="[#camera]" width="0.1"  primitive='a-image'src="https://cdn.glitch.me/2087dfa6-bd02-4451-a189-36095a66f386%2Fup-arrow.png" />
    {data1.map(eachHotspot=>
            // <Entity geometry={{primitive: 'box'}} material={{color: 'green'}} position={eachHotspot}  onClick={hello}/> 
            <Entity  position={eachHotspot} id={eachHotspot.hotspot_id} events={{click:hello}} height="0.2"  look-at="[camera]" width="0.2" primitive='a-image'src={staticImage} /> )}
           
      </a-scene>
      <img style={{ position: 'absolute', top: '88%', left: '37%',  opacity:" 0.7 ",transform: 'translate(-50%, -50%)', width: '200px', height: '100px', zIndex: '999' }} src={stateMap}  />
      </div>)
}
export default SingleScene