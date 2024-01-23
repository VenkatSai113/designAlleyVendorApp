import {Component} from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {GrUpdate} from 'react-icons/gr'
import Cookies from 'js-cookie'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom'
class ProfileCreation extends Component{ 
    state={profileImage:[],username:"",email:"",phoneNumber:"",companyName:"",location:"",imageFile:"",responseMsg:"",open:false, vertical: 'top',
    horizontal: 'center',successMsg:"",navigationPage:""}
    onChangeHandle=(event)=>{
       const {name,value}=event.target
       this.setState({[name]:value})
    }
    handleClose = () => {
        this.setState({open:false})
      };
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
        const url="https://database2-adarsh057.onrender.com/editProfile"
        const config={
            headers:{
                "Content-Type":"Application/json",
                "authorization":`Bearer ${jwtToken}`
            }
          
        }
        const result=await axios.post(url,formData, config).then
        (response=>{
            console.log(response.data)
            this.setState({responseMsg:response.data})
            this.setState({open:true})
            if(response.status===200){
                this.setState({navigationPage:"/"})
            }else{
                console.log("Hello")
                this.setState({navigationPage:"/createProfile"})
        }
        })
        .catch(error=>console.log(error))
       
        
    }
    render(){
        const {profileImage,username,email,phoneNumber,companyName,location,responseMsg,open,vertical,
        horizontal,navigationPage}=this.state;
       
        return(
            <div className='forgot-password-bg-container'>
                <div className='forgot-password-container'>
                    <h3 className='edit-profile'>Create Profile</h3>
            {<input  type="file"  onChange={this.onProfileChange} className="custom1-file-input"/>}
                    <img src={profileImage} className='edit-profile-image' alt="" />
                  <input type="text" className='username-input-filed' name="username" value={username} onChange={this.onChangeHandle} placeholder='User Name'/>
                  <input type="email" className='username-input-filed' name="email" value={email} onChange={this.onChangeHandle} placeholder='Email'/>
                  <input type="number" className='username-input-filed' name="phoneNumber" vaue={phoneNumber} onChange={this.onChangeHandle} placeholder='Phone Number'/>
                  <input type="text" className='username-input-filed' name="companyName" value={companyName} onChange={this.onChangeHandle} placeholder='Company Name'/>
                  <input type="text" className='username-input-filed' name="location" value={location} onChange={this.onChangeHandle} placeholder='Location'/>
              <div className='mt-3'>
             
                  <Button variant="secondary" className='ml-2'><GrUpdate/></Button>
                  <Link to={navigationPage}><Button variant="secondary" onClick={this.onSubmitProfile} className='ml-2'>Submit</Button></Link>
                  <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
          {responseMsg }
        </Alert>
      </Snackbar>
                  </div>
                 
                  <hr></hr>
                </div>
            </div>
        )
    }
}
export default ProfileCreation