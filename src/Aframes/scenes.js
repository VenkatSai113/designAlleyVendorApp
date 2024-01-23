
import { useEffect, useState } from "react"
import "./index.css"

import { BsTrash } from "react-icons/bs"
import Cookies from "js-cookie"
const Scenes=(props)=>{
    const {sceneData,selectSceneId,isActive,deleteScenes}=props
    const {scenename,sceneimage,id}=sceneData
    const [tourId,setTourId]=useState("")
   const selectScene=()=>{
    console.log(id)
        selectSceneId(id,scenename)
        
      
    }
    let jwtToken=""
    useEffect(()=>{
        jwtToken=Cookies.get("jwt_token")
        const tourId=localStorage.getItem("tourId")
        const parseTourId=JSON.parse(tourId);
        setTourId(parseTourId)

    })
    const deleteScene=async()=>{
        let text = "Are you sure you want to delete the Scene";
        const deleteSceneInfo={id,tourId}
       console.log(id,"idd")
        if (window.confirm(text) === true) {
           
        const apiUrl="https://database2-adarsh057.onrender.com/deleteScene";
        const options={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${jwtToken}`
            },
            body:JSON.stringify(deleteSceneInfo)
            
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        if(response.ok===true){
          deleteScenes(data)
        }
        console.log(data)
        console.log(jwtToken)
        } else {
          text = "You canceled!";
          console.log(text)
        }

    }
    const hello=isActive?"hello":""
    return(
       
          <>
      
        
        <div className={`scene-row-container ${hello}`}>
            <div className='d-flex flex-column'>
            <div className={`thumbnail-div-1 `}>
        <img src={sceneimage} className="thumbnail-image-1" alt="" onClick={selectScene}/>
       <div className={`scene-name-div-1  `}>
        <p className="scene-name">{scenename}</p>
        <label className="scene-name" onClick={deleteScene}><BsTrash/></label>

        </div>
     </div>
            </div>
          </div>
        
          </>
    )
}
export default Scenes