




import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import Cookies from 'js-cookie';
import {TiTick} from "react-icons/ti"
import {RxCross1} from "react-icons/rx"
let jwtToken=""
let parseActiveSceneId=""
let parseActiveTourId=""
const HotspotName=(props)=>{
    const {hotspots34,updatedHotspots,multipleScenes,onLinkScene}=props
    const {hotspotName,hotspotId,activeSceneName,id}=hotspots34
    const {sceneId}=multipleScenes
   const [targetScene, setTargetScene]=useState("")
   const [actionHotspot,setActionHotspot]=useState("")
    const deleteHotspot =async()=>{
        
        const jwtToken=Cookies.get("jwt_token")
       const apiUrl="https://database2-adarsh057.onrender.com/deleteHotspot"
       const deleteHotspotInfo={hotspotId,id}
       const options={
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
            "authorization":`Bearer ${jwtToken}`
        },
        mode: "cors",
        body:JSON.stringify(deleteHotspotInfo)
       }
       const response=await fetch(apiUrl,options)
       const data=await response.json()
       if(response.ok===true){
        updatedHotspots(data,hotspotName)
       }
       
    }
    const linkScene=()=>{
       //SELECT Query
       }
       const onSceneSelection=(event)=>{
         jwtToken=Cookies.get("jwt_token")
         let activeSceneId=localStorage.getItem("activeSceneId")
          parseActiveSceneId=JSON.parse(activeSceneId)
          let activeTourId=localStorage.getItem("tourId")
           parseActiveTourId=JSON.parse(activeTourId)
        console.log(hotspotId,"id")
        setActionHotspot(hotspotId)
        const linkedScene=event.target.value
      
        setTargetScene(linkedScene)
      
       }
       const onLinkClick=async()=>{
        const targetScene1=multipleScenes.filter(eachScene=>
            eachScene.scenename===targetScene)
            const targetedSceneId=targetScene1[0].id
            const linkedspots={parseActiveSceneId,parseActiveTourId,actionHotspot,targetedSceneId}
            const apiUrl="https://database2-adarsh057.onrender.com/linkedSpots"
            const options={
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    "authorization":`Bearer ${jwtToken}`
                },
                mode: "cors",
                body:JSON.stringify(linkedspots)
            }
            const response=await fetch(apiUrl,options)
            const data=await response.json()
            console.log(data)
            // console.log("activeScene:",parseActiveSceneId)
            console.log("hotspot id:",actionHotspot)
            // console.log("targetscene", targetScene1[0].id)
         

       }
    return(
        <div className="d-flex flex-row justify-content-around">
        <p onClick={linkScene}>{hotspotName}</p>
    
        {/* <p onClick={deleteHotspot}><BiTrash/></p> */}
        <select onChange={onSceneSelection}>
            <option>select</option>
            {multipleScenes.map(eachItem=>
              <option value={eachItem.scenename}>
              {eachItem.scenename}
            </option>  )}
            
            
        </select>
        <p className='tick-icon' onClick={onLinkClick}><TiTick/></p>
        <p className="tick-icon"  onClick={deleteHotspot}><RxCross1/></p>
        </div>
    )
}
export default HotspotName