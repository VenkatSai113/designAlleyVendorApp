import {Component} from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'
import ChangePassword from './ChangePassword'
import axios from 'axios'
import {GrUpdate} from 'react-icons/gr'
import Cookies from 'js-cookie'

class EditProfile extends Component{ 
    state={profileImage:[],username:"",email:"",phoneNumber:"",companyName:"",location:"",imageFile:""}
    onChangeHandle=(event)=>{
       const {name,value}=event.target
       this.setState({[name]:value})
    }
    onProfileChange=(event)=>{
        const file=event.target.files[0];
        this.setState({imageFile:file})
        const reader=new FileReader()
        reader.onloadend=()=>{
            this.setState({profileImage:reader.result})
        }
        if (file) {
            reader.readAsDataURL(file);
          } else {
           this.setState({profileImage:null});
          }
       
    }
   
    onSubmitProfile=async()=>{
        const jwtToken=Cookies.get("jwt_token")
        const {imageFile,username,email,phoneNumber,companyName,location}=this.state;
        console.log(imageFile)
        const formData=new FormData();
        formData.append("username",username);
        formData.append("email",email);
        formData.append("phoneNumber",phoneNumber);
        formData.append("companyName",companyName);
        formData.append("location",location);
        formData.append("profileImages",imageFile);
        const url=""
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
          
        }
        const result=await axios.post(url,formData, config).then
        (response=>{
            console.log(response)
        })
        .catch(error=>console.log(error))
       
        
    }
    render(){
        const {profileImage,username,email,phoneNumber,companyName,location}=this.state;
       
        return(
            <div className='forgot-password-bg-container'>
                <div className='forgot-password-container'>
                    <h3 className='edit-profile'>Edit Profile</h3>
            {<input  type="file"  onChange={this.onProfileChange} className="custom1-file-input"/>}
                    <img src={profileImage} className='edit-profile-image' alt="" />
                  <input type="text" className='username-input-filed' name="username" value={username} onChange={this.onChangeHandle} placeholder='User Name'/>
                  <input type="email" className='username-input-filed' name="email" value={email} onChange={this.onChangeHandle} placeholder='Email'/>
                  <input type="number" className='username-input-filed' name="phoneNumber" vaue={phoneNumber} onChange={this.onChangeHandle} placeholder='Phone Number'/>
                  <input type="text" className='username-input-filed' name="companyName" value={companyName} onChange={this.onChangeHandle} placeholder='Company Name'/>
                  <input type="text" className='username-input-filed' name="location" value={location} onChange={this.onChangeHandle} placeholder='Location'/>
              <div className='mt-3'>
              <ChangePassword/>
                  <Button variant="secondary" className='ml-2'><GrUpdate/></Button>
                  <Button variant="secondary" onClick={this.onSubmitProfile} className='ml-2'>Submit</Button>
                  </div>
                  <hr></hr>
                </div>
            </div>
        )
    }
}
export default EditProfile