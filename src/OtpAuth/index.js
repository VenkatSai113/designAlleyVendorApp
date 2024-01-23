import {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import firebase from './firebase.config'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Cookies from 'js-cookie'
import './index.css'
import { Redirect } from 'react-router-dom'

class OtpAuth extends Component{
    state={phoneNumber:"",hello:"hello",submittMsg:[],validationStatus:""}
    onChangeMobileNumber=(event)=>{
        this.setState({phoneNumber:event.target.value})
    }
  
    onOtp=(jwtToken)=>{
      let flag=0;
      const {phoneNumber,otp}=this.state
      let appVerifier=new firebase.auth.RecaptchaVerifier('recaptcha',{'size':"invisible"});
     let phone=`+91${phoneNumber}`
     const auth = firebase.auth();
     auth.signInWithPhoneNumber(phone, appVerifier)
.then((confirmationResult) => {
 const code = prompt('Enter the verification code:');
 console.log(otp)
 confirmationResult.confirm(code)
   .then((result) => {
    const jwtTokenLogin=Cookies.set("jwt_token",jwtToken,{expires:30})
     console.log("successfully varified")
     const {history}=this.props
     history.replace("/createProfile")
    
   })
   .catch((error) => {
     // Verification code is incorrect
    
     console.log(error.code)
     this.setState({submittMsg:error.code})
     console.log("Verification code is incorrect")
   });
   
})

.catch((error) => {
 // Error sending SMS verification code
 console.log(flag)
 if(flag>0){
 console.log("Error sending SMS verification code")
 console.log(error.message)
 this.setState({submittMsg:error.message})
 flag=flag+1
 }
 else{
  this.setState({submittMsg:"Please Reload the Page!"})
 }
 
});
     }
    handleClick=async(e)=>{
        const {phoneNumber,hello}=this.state
        const extra= {phoneNumber,hello}
       
        const url="https://database2-adarsh057.onrender.com/checkingPhonenumbers/"
        const options={
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          mode:"cors",
          body:JSON.stringify(extra)
        }
        const response=await fetch(url,options)
        const data=await response.json()
       this.setState({submittMsg:data.error_msg})
       
        if(response.ok===true){
          this.onOtp(data.jwtToken)

        }

       
    }
    render(){
      const {submittMsg}=this.state
    
        return(
            <form >
              
              
            <div className='login-bg-container' >
            <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="piniteinfo Logo"/>
            <div className="login-card-container">
            <img className="logo-login-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="piniteinfo Logo"/>
            
               <input type="text" placeholder='Enter phone number' className='username-input-filed ' onChange={this.onChangeMobileNumber}/>
              
               {/* {isPasswordTrue&&<p className='error-message'>*{errorMessage}</p>} */}
              <label></label>
              <div id="recaptcha"></div>
               <button type="button" className='login-button' onClick={this.handleClick}>Request OTP</button>
               <label className='error-message12'>{submittMsg}</label>
               <p className='forgot-password'><Link to="/forgotpassword">Forgot Password?</Link></p>
               <p className='dont-have-account'>Don't Have an Account?<span className='signup-text'><Link to="signup">Sign Up</Link></span></p>
              
            </div>
            </div>
            </form>
        )
    }
}
export default withRouter(OtpAuth)