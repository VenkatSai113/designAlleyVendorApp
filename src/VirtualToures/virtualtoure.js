import React from "react"
import {Component} from "react"
import "./virtualtoure.css"
import FormDialog from './sceneTitle';
import axios from "axios";
import Virtual360Thumbnails from "./virtual360thumbnails"
import Button from 'react-bootstrap/Button';
import AdjustIcon from '@mui/icons-material/Adjust';
const initialvirtualSceneDetails=[{
    sceneId:1,
    scenename:"scene01",
    sceneImage:"https://media.gettyimages.com/id/1321116143/photo/360-equirectangular-panoramic-interior-of-modern-villa-with-living-room-kitchen-and-stairs.jpg?s=612x612&w=gi&k=20&c=ZyHlSfjzlOwoM0lEzaiHThfv_Udn6iM00puUXtjMmZM=",
    hotspotsButton:false
},{ sceneId:2,
    scenename:"scene02",
    sceneImage:"https://cdn.eso.org/images/thumb300y/ESO_Paranal_360_Marcio_Cabral_Chile_07-CC.jpg",hotspotsButton:false},{
        sceneId:3,
        scenename:"scene03",
        sceneImage:"https://thumbs.dreamstime.com/b/times-square-panorama-new-york-133063524.jpg",
        hotspotsButton:false
    }]
   
class VirtualToures extends Component{
    
    
        
       
    
    state={tourTitle:"",description:"",scenename:"",sceneImage:"",virtualScenes:initialvirtualSceneDetails,virtual360View:"", positionx:'',positiony:"",positionz:""}

    componentDidMount=()=>{
        console.log("Hello")
    }
    uploadimage=(event)=>{
        this.setState({sceneImage:event.target.files[0]})
        console.log(event.target.files[0])
    }
    onhandleChange=(event)=>{
       
        const {name,value}=event.target
       this.setState({[name]:value})
       const {description}=this.state
       console.log(description)
    }
    sceneIds=(sceneImage,sceneId)=>{
       this.setState({virtual360View:sceneImage})
      this.setState(PrevState=>({
        virtualScenes:PrevState.virtualScenes.map(eachScene=>{
        if(sceneId===eachScene.sceneId){
            return {...eachScene,hotspotsButton:true}
        }
        else{
            return {...eachScene,hotspotsButton:false}
        }
    return(eachScene)})}))
    }
    onhandleSubmit=()=>{
        const {tourTitle,description,scenename,sceneImage}=this.state
        const formData=new FormData();
        formData.append("tourTitle",tourTitle);
        formData.append("description",description);
        formData.append("scenename",scenename);
        formData.append("sceneImage",sceneImage);
        axios.post("/scences",formData)
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    addHotspots=(event)=>{
      const positionX=localStorage.getItem("positionx")
      const positionY=localStorage.getItem("positiony")
      const positionZ=localStorage.getItem("positionz")
      let parsePositionsx = JSON.parse(positionX)
      let parsePositionsy = JSON.parse(positionY)
      let parsePositionsz = JSON.parse(positionZ)
      this.setState({positionx:parsePositionsx})
      this.setState({positiony:parsePositionsy})
      this.setState({positionz:parsePositionsz})
      const {positionx,positiony,positionz}=this.state
        console.log(positionx,positiony,positionz)
    }
    handleClick = (event) => {
         
        const intersection = event.detail.intersection;
        console.log(`Sky position: (${intersection.point.x}, ${intersection.point.y}, ${intersection.point.z})`);
        // const posObject={x:intersection.point.x,y:intersection.point.y,z:intersection.point.z}
        // this.setState({positionx:posObject})
        // const {positionx}=this.state
        // console.log(positionx)
        localStorage.setItem("positionx",JSON.stringify(intersection.point.x))
        localStorage.setItem("positiony",JSON.stringify(intersection.point.y))
        localStorage.setItem("positionz",JSON.stringify(intersection.point.z))
        
      };
  
    render(){
        const {tourTitle,description,scenename,virtualScenes,virtual360View,positionx,positiony,positionz}=this.state
        return(
            <div>
                  <div className="d-flex flex-row">
                  <FormDialog/> 
                  </div>    
                <div className="vr-container">
                    <div className="scene-row-div-1">
                        <div className="thumbnail-containers-1">
                            {virtualScenes.map(eachThumbnail=>
                               <Virtual360Thumbnails thumbnail360={eachThumbnail} sceneIds={this.sceneIds} key={eachThumbnail.sceneId}/> )} 
                             
                        </div>
                        <div className="hotspots-list">
                            <h6 className="hotspots-heading">Hotspots</h6>
                            <Button variant="primary" size="sm" onClick={this.addHotspots}>
         Add Hotspot 
        </Button>
                            </div>
                        <div className="virtual-toure-view">
                        <a-scene embedded>
      <a-entity>
        <a-camera position="0 1.6 0" ref={this.myRef}>
          <a-cursor></a-cursor>
        </a-camera >
      </a-entity>
      <a-cylinder position={`${positionx} ${positiony} ${positionz}`} radius="0.5" height="0.5" color="#FFC65D"></a-cylinder>
      <a-sky  src={virtual360View} onClick={this.handleClick}>
      
            <a-cursor raycaster="objects: [data-raycastable]"></a-cursor>
          </a-sky>
    </a-scene>
                       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VirtualToures