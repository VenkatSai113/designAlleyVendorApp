import { BsTrash } from "react-icons/bs"

const Virtual360Thumbnails=(props)=>{
    const {thumbnail360,sceneIds}=props
    const {scenename,sceneImage,sceneId,hotspotsButton}=thumbnail360
    const previewTo360Image=()=>{
        sceneIds(sceneImage,sceneId)
       
    }
    const isActive=hotspotsButton?"active-tab":""
    console.log("Hello")
    return(
        <div className={`thumbnail-div-1 ${isActive}`}>
        <img src={sceneImage} className="thumbnail-image-1" onClick={previewTo360Image}/>
       <div className="scene-name-div-1">
        <p className="scene-name">{scenename}</p>
        <label className="scene-name"><BsTrash/></label>
       
        </div>
       
     </div>
    )
}
export default Virtual360Thumbnails