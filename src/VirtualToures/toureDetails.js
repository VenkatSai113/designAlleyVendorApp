import { Component } from "react";
import "./virtualtoure.css";
import Button from '@mui/material/Button';
import Sidebar from "../Sidebar/index"
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

class ToureDetails extends Component{
    state={tourTitle:"",description:"",tourThumbnail:"",tourImgSrc:""}

    uploadimage=(event)=>{
        const{tourThumbnail}=this.state
        const file=event.target.files[0]
        this.setState({tourThumbnail:file})
        this.setState({tourImgSrc:URL.createObjectURL(file)})
        console.log(URL.createObjectURL(file))
    }
    onhandleChange=(event)=>{
       
        const {name,value}=event.target
       this.setState({[name]:value})
       const {description}=this.state
       console.log(description)
    }
    hello=()=>{
        console.log("Hello")
    }
   
    onCreateTour=()=>{
        const {tourTitle,description,tourThumbnail}=this.state
        localStorage.setItem("tourTitle",tourTitle)
        const jwtToken=Cookies.get("jwt_token");
        console.log(jwtToken)
        const apiurl="https://database2-adarsh057.onrender.com/virtualtours/"
      
        console.log(tourTitle)
        const formData=new FormData();
        formData.append("tourTitle",tourTitle);
        formData.append("description",description);
        formData.append("tourThumbnail",tourThumbnail);
       
        axios.post(apiurl,formData).then(response=>{
            if(response.status===200){
               
                const {history}=this.props
                history.push("/virtualtoures")
            }
            console.log(response.data)
            localStorage.setItem("tourId",response.data.tourId)
          
        })
        
        .catch(error=>{
            console.log(error)
        })

    }
    render(){
        const {tourTitle,description,errorMsg,tourImgSrc}=this.state
        return(
            <div className="d-flex flex-row">
                <Sidebar/>
            <div className="vr-container-details">
                <h1 className="main-heading">Welcome To Virtual Tours</h1>
                <div className="body-vr-container">
                    <input type="text" className="form-control" placeholder="Enter your Title..." name="tourTitle" value={tourTitle} onChange={this.onhandleChange}/>
                    <textarea type="text" className="form-control mt-3" placeholder="Enter your Description..." value={description} name="description" onChange={this.onhandleChange}></textarea>
                    {/* <input type="text" className="form-control mt-3" placeholder="Enter scene name" value={scenename} name="scenename" onChange={this.onhandleChange}/> */}
                    <label htmlFor="file-upload" className="m-3">upload an Image</label>
<input type="file" id="file-upload" name="file-upload" className="hello"  onChange={this.uploadimage}/>
<img src={tourImgSrc}/>
<Button variant="outlined" className='mt-3' onClick={this.onCreateTour}>
        Create Virtual Tour
      </Button>
     
                </div>
                </div>
                </div>
        )
    }
}
export default ToureDetails