import { Component } from "react";
import './index.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import { FacebookShareButton, WhatsappShareButton} from 'react-share'
import {FacebookIcon,WhatsappIcon} from 'react-share'
import Cookies from "js-cookie";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

class InviteDesigner extends Component{
  state={mobileNumber:"",invitationMsg: "I'm inviting you to register with Design Alley! Here is the link http://localhost:3000/signup",errorMsg:"",open:false, vertical: 'top',
  horizontal: 'center',successMsg:""}
  onChangeMobileNumber=(event)=>{
    this.setState({mobileNumber:event.target.value})
  }
  handleClose = () => {
    this.setState({open:false})
  };
  invitationApi=async()=>{
    
    const jwtToken=Cookies.get("jwt_token")
    console.log(jwtToken)
    const {mobileNumber,invitationMsg}=this.state
    const invitationDetails={mobileNumber,invitationMsg}
    console.log(invitationDetails)
    const url="https://database2-adarsh057.onrender.com/invitationApi"
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
       "Authorization":`Bearer ${ jwtToken}`
      }
      ,
      body:JSON.stringify(invitationDetails)
    }
    const response=await fetch(url,options);
    console.log(response)
    const data=await response.json()
   this.setState({errorMsg:data})
   if(response.ok===true){
    this.setState({successMsg:data})
    this.setState({errorMsg:""})
    this.setState({open:true})
    this.setState({mobileNumber:""})
   }
  }
    render(){
      const {errorMsg ,open,vertical,horizontal,successMsg,mobileNumber}=this.state
        return(
            <div className="invite-container">
                <div className="header-div">
                <img className="logo-login-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="piniteinfo Logo"/>
                </div>
                <div className="body-div">
                  <div className="icon-div">
                    <p ><AiOutlineUserAdd className="icon-symboll"/></p>
                  </div>
                  <b className="invite-desigener-heading">Invite Interior Designers</b>
                  <p className="invite-description">Invite atleast three interior Designers</p>
                  <label className="mobile-number-text" htmlFor="mobilenumber">Mobile Number</label>
                  <input type="number" name={mobileNumber} value={mobileNumber} onChange={this.onChangeMobileNumber} id="mobilenumber"/>
                  <button type="button" className="login-button" onClick={this.invitationApi}>Invite</button>
                 <label className="error-message">{errorMsg}</label>
                 {/* <Snackbar open={open}  autoHideDuration={10} > */}
         {/* <Alert severity="success" sx={{ width: '100%' }}>
     {errorMsg}
        </Alert> */}
        {/* <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert> */}
         <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
          {successMsg }
        </Alert>
      </Snackbar>
      {/* </Snackbar> */}
                  <p className="invite-description">Invite through Social Media</p>
                  <div  >
                    <FacebookShareButton url="http://localhost:3000/signup" quote="I'm inviting you to register with Design Alley! Here is the link" hashtag="react">
                      <FacebookIcon size={35}  logoFillColor="white" round={true}>
                      </FacebookIcon>
                    </FacebookShareButton>
                    <WhatsappShareButton url="http://localhost:3000/signup" title="I'm inviting you to register with Design Alley! Here is the link">
                      <WhatsappIcon className="ml-3" size={35} logoFillColor="white" round={true}>
                      </WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                  <div>
                  </div>
                </div>
            </div>
        )
    }
}
export default InviteDesigner                                                              