
import React,{Component} from "react"
import "./index.css"
import HotspotName from "./HotspotNames"
import {Button} from "react-bootstrap"
import Cookies from "js-cookie"
import SingleScene from "./singleScene"
import Scenes from "./scenes"
import axios from "axios"
import {Link} from "react-router-dom"

const preScenes=[
] 
const singleScene1=[{
    scenename:"scene01",
    sceneimage:"",
    hotspot:[{x: -4, y: 4, z: -5},{x: 6, y: 6, z: -5}],
    id:0

}]
const hotspotNames=[]
let selectedScene=null


let jwtToken=""
let tourId=""
class Aframess extends Component{
    state={sceneName:"",sceneImage:"",multipleScenes:preScenes,singleScenes:singleScene1[0],hotspotData:[],jwtToken:"",stateHotspot:hotspotNames,hotspotName:"",activeScene:"",stateMap:"",activeSceneId:""}
    componentDidMount=()=>{
         jwtToken=Cookies.get("jwt_token")
        this.setState({jwtToken})
        tourId=localStorage.getItem("tourId")
       
    }
    onChangeName=(event)=>{
        this.setState({sceneName:event.target.value})
      
    }
    onChangeImage=(event)=>{
        this.setState({sceneImage:event.target.files[0]})
   
    }
    
    onSubmitScene=async()=>{
        // const jwtToken=Cookies.get("jwt_token")
      
        const apiUrl="https://database2-adarsh057.onrender.com/scenes"
        const {sceneName,sceneImage}=this.state
      
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
        }
    
        const formData=new FormData();
        formData.append("sceneName",sceneName)
        formData.append("sceneImage",sceneImage)
        formData.append("tourId",tourId)
        axios.post(apiUrl,formData,config).then
        (response=>{
         
            const responsee=response.data
           
            const updatedData={
                id:responsee.scene_id,
                scenename:responsee.scene_name,
                sceneimage:responsee.scene_image
            }
          

             this.setState((PrevState)=>({multipleScenes:[...PrevState.multipleScenes,updatedData]}))
            
        const {multipleScenes}=this.state
     
        console.log(multipleScenes)
        this.setState({sceneName:""})
            //  this.setState({sceneImage:""})
       }
        ).catch(error=>
            
            console.log(error)
        )






      
        // const newScene={
        //     scenename:sceneName,
        //     sceneimage:sceneImage ,
        // }
        // const apiUrl="https://database2-adarsh057.onrender.com/scenes"
        // const options={
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"Application/json",
        //         "authorization":`Bearer ${jwtToken}`
        //     },
        //     mode:"cors",
        //     body:JSON.stringify(newScene)
        // }
        // const response=await fetch(apiUrl,options)
        // const data=await response.json()
        // console.log(data)
       
      
    }
    selectSceneId=async(id,scenename)=>{
        this.setState({activeSceneId:id})
        const {hotspotData}=this.state
        localStorage.setItem("activeSceneId",id)
       const {multipleScenes,stateHotspot,activeScene,singleScenes}=this.state
       const hotspotsPerScene={id,hello:"hello"}
       selectedScene=multipleScenes.filter(eachScene=>
        eachScene.id===id)
        this.setState({singleScenes:selectedScene[0]})

    //   this.setState({activeScene:scenename})  
      this.setState({activeScene:id},()=>{
            console.log(singleScenes)
        })
        
      const apiUrl="https://database2-adarsh057.onrender.com/sceneHotspots";
      const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${jwtToken}`
        },
        body:JSON.stringify(hotspotsPerScene)
      }
      const response=await fetch(apiUrl,options)
      const data=await response.json()

          this.setState({hotspotData:data})
          console.log(data,"select")
          const mapImageFunction=async()=>{
      
            const mapapiUrl="https://database2-adarsh057.onrender.com/getmapImage";
            const activateSceneId={id,hello:"hello"}
            const mapOptions={
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":`Bearer ${jwtToken}`
                },
                body:JSON.stringify(activateSceneId)
            }
            const mapResponse=await fetch(mapapiUrl,mapOptions)
            const mapData=await mapResponse.json()
            console.log(mapData)
            const mapImage=mapData.map_image
            this.setState({stateMap:mapImage})
          }
           
            mapImageFunction()
         
     
    }
    updatedHotspots=(data,hotspotName)=>{
        const {stateHotspot}=this.state
       this.setState({hotspotData:data})
      const onDeleteUpdatedHotspot=stateHotspot.filter(eachHotspot=>
        eachHotspot.hotspotName!==hotspotName)
        this.setState({stateHotspot:onDeleteUpdatedHotspot})
      
    }
    
  
    addHotspots=async()=>{
        let text;
        let hotspotName = prompt("Please enter your name:", "");
        if (hotspotName ===null || hotspotName === "") {
          text = "User cancelled the prompt.";
          console.log("User cancelled the prompt.")
        } else {
            console.log("Hello")
            let hotspotPositions=localStorage.getItem("position");
            let parsehotspots=JSON.parse(hotspotPositions)
      
        const {jwtToken}=this.state
        const {singleScenes}=this.state
        const sceneId=singleScenes.id
        // const newHotspot=singleScenes.hotspot
        const sceneotspot={sceneId,parsehotspots,hotspotName}
        const apiUrl="https://database2-adarsh057.onrender.com/hotspots"
        const options={
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
                
                "authorization":`Bearer ${jwtToken}`
              },
              mode: "cors",
            body:JSON.stringify(sceneotspot)
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
      
       
        if(response.ok===true){
              const {hotspotData}=this.state
            this.setState({hotspotData:data})
            
            // this.setState(PrevState=>({hotspotData:PrevState.data}))
            const dataLength=data.length-1
            console.log(dataLength,"length")
            const {activeScene,stateHotspot}=this.state
           const newHotspots={
            hotspotName:hotspotName,
            activeSceneName:activeScene,
            hotspotId:data[dataLength].hotspot_id
            
         
           }
           console.log(newHotspots)
          
        
            this.setState(PrevState=>({stateHotspot:[...PrevState.stateHotspot,newHotspots]}))
        }
       
        const updatedArray=selectedScene[0].hotspot=data
       
    }
    }
    deleteScenes=(data)=>{
        const updatedScenes=data.map(eachItem=>({
            id:eachItem.scene_id,
            scenename:eachItem.scene_name,
            sceneimage:eachItem.scene_image
        }))

        this.setState({multipleScenes:updatedScenes})
    }
    onChangeMap=(event)=>{
        const {activeSceneId}=this.state
        const mapFile=event.target.files[0]
        const apiUrl="https://database2-adarsh057.onrender.com/mapImage"
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
        }
        const formData=new FormData();
        formData.append("activeSceneId",activeSceneId)
        formData.append("mapFile",mapFile)
       
        axios.post(apiUrl,formData,config).then
        (response=>{
            console.log(response.data.map_image)
            const mapImagess=response.data.map_image
            this.setState({stateMap:mapImagess})
            const {stateMap}=this.state
            console.log(stateMap,"jhg")
          
       }
        ).catch(error=>{
            
            console.log(error)}
        )
    






    }

    previewView=()=>{
        window.open('http://localhost:3000/viewer', '_blank');
    }
    render(){
        const {multipleScenes,stateMap,singleScenes,stateHotspot,activeScene,hotspotData,sceneImage,sceneName}=this.state
        const activeHotspots=stateHotspot.filter(sceneHotspot=>
            sceneHotspot.activeSceneName===activeScene)
            console.log(activeScene)
         
       
    return(
        <div >
            <input type="text" className="form-control" placeholder="Enter Scene Name" value={sceneName} onChange={this.onChangeName}/>
            <input type="file" className="form-control mt-3 mb-3" name={sceneImage} onChange={this.onChangeImage}/>
            <Button variant="primary" onClick={this.onSubmitScene}>Create Scene</Button>
            <Link to=""><Button variant="primary" className="ml-4" onClick={this.previewView}>Save</Button></Link>
            <div className="scene-row-divv">
            <div >
                {multipleScenes.map(eachScene=>
                    <Scenes sceneData={eachScene} selectSceneId={this.selectSceneId} deleteScenes={this.deleteScenes}  key={eachScene.id} isActive={eachScene.id===activeScene}/>)}
         
            </div>
            <div className="hotspots-list">
            <h6 className="hotspots-heading">Upload Map</h6>
            <input type="file" className="form-control" onChange={this.onChangeMap}/>
                            <h6 className="hotspots-heading">Hotspots</h6>
                            <button onClick={this.addHotspots}>Add hotspots</button>
        {activeHotspots.map(eachHotspot=>
            <HotspotName hotspots34={eachHotspot} updatedHotspots={this.updatedHotspots} multipleScenes={multipleScenes} key={eachHotspot.hotspotId} onLinkScene={this.onLinkScene}/>)}
                            </div>
          {<SingleScene singleScene1={singleScenes} data1={hotspotData} key={hotspotData.hotspot_id}  stateMap={stateMap}/>}
          
  
          </div>
     
        </div>
    )
}
}
export default Aframess