import {Entity} from 'aframe-react';
import { useEffect, useState } from 'react';
import axios from "axios"
import Cookies from 'js-cookie';
import hotspotImage from "./next.png"
let jwtToken=""
const Viewer=()=>{
    const [singleScene,setSingleScene]=useState("")
    const [hotspots,setHotspots]=useState([]);
  console.log(singleScene, "sd")
  console.log(hotspots)
  
    useEffect(() => {
        jwtToken=Cookies.get("jwt_token")
        const fetchData = async () => {
          try {


            const tourId=localStorage.getItem("tourId")
            const parseTourId=JSON.parse(tourId)
            const localtourId={parseTourId,tour:"tour"}

          
            const apiUrl="https://database2-adarsh057.onrender.com/viewer"
           
            const formData=new FormData();
            formData.append("parseTourId",parseTourId);
            formData.append("tour","tour");
            axios.post(apiUrl,formData).then(response=>{
                setSingleScene(response.data[0])
                setHotspots(response.data[1])
            })
            // hotspots.map(eachObj=>
            //     console.log("eachObj"))
        
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
      const hello=(event)=>{
        const hotspotId=event.target.id
        console.log(hotspotId)
        const hotspotIds={hotspotId,hello:"hello"}
            const apiUrl="https://database2-adarsh057.onrender.com/moveingScenes"
           
            const formData=new FormData();
            formData.append("hotspotId",hotspotId);
            formData.append("hello",hello);
            axios.post(apiUrl,formData).then(response=>{
                setSingleScene(response.data[0])
                setHotspots(response.data[1])
            })
   
      }
     
    return(
        <div className=''>

           
        <a-scene raycaster="objects: [data-raycastable]">
       
        <a-sky src={singleScene.scene_image}  clickable></a-sky>
        <a-camera id="camera" >
        <a-cursor colo="red" world-pos  fuse="true" fusetimeOut="3000"></a-cursor>
        </a-camera>
        {/* <Entity  position="0 16 -1"  height="0.5" look-at="[camera]" width="0.5"  primitive='a-image'src="https://cdn.glitch.me/2087dfa6-bd02-4451-a189-36095a66f386%2Fup-arrow.png" /> */}
        {/* <Entity  position={hotspots}  height="0.1" look-at="[#camera]" width="0.1"  primitive='a-image'src="https://cdn.glitch.me/2087dfa6-bd02-4451-a189-36095a66f386%2Fup-arrow.png" /> */}
        {hotspots.map(eachHotspot=>
                // {/* // <Entity geometry={{primitive: 'box'}} material={{color: 'green'}} position={eachHotspot}  onClick={hello}/>  */}
                <Entity  position={eachHotspot} id={eachHotspot.hotspot_id} look-at="#camera" events={{mouseenter:hello}} height="0.1"  width="0.1" primitive='a-image'src={hotspotImage} />)} 
          </a-scene>
          <img style={{ position: 'absolute', top: '88%', left: '10%',  opacity:" 0.9 ",transform: 'translate(-50%, -50%)', width: '200px', height: '100px', zIndex: '999' }} src={singleScene.map_image} />
          </div>)
}
export default Viewer