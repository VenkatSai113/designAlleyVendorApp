import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import { Redirect,Link} from 'react-router-dom'
class Login extends Component{
    state={username:"",password:""}
    onchangeUsername=(event)=>{
        this.setState({username:event.target.value,errorMessage:"",isPasswordTrue:false})
    }
    onchangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    onSubmitSuccess=(jwtToken)=>{
        console.log(jwtToken)
        this.setState({isPasswordTrue:false})
        Cookies.set('jwt_token',jwtToken, { expires: 1 })
      const {history}=this.props
      history.replace("/")
    }
    onSubmitFailure=(errorMsg)=>{
       this.setState({errorMessage:errorMsg})
       this.setState({isPasswordTrue:true})
    }
    onLoginForm=async (event)=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}
        const url="https://apis.ccbp.in/login"
        const options={
            method:'POST',
            body:JSON.stringify(userDetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
      
        if(response.ok===true){
            this.onSubmitSuccess(data.jwt_token)
        }
        else{
            this.onSubmitFailure(data.error_msg)
        }
       
      
    }

    render(){
        const {isPasswordTrue,errorMessage}=this.state
        const jwtTokenRender=Cookies.get('jwt_token')
        if(jwtTokenRender !==undefined){
            return(<Redirect to="/"/>)
        }
        return(
            <form onSubmit={this.onLoginForm}>
            <div className='login-bg-container' >
            <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="piniteinfo Logo"/>
            <div className="login-card-container">
            <img className="logo-login-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="piniteinfo Logo"/>
               <input type="text" placeholder='Enter User name' className='username-input-filed ' onChange={this.onchangeUsername}/>
               <input type="password" placeholder='Enter Password' className='username-input-filed' onChange={this.onchangePassword}/>
               {isPasswordTrue&&<p className='error-message'>*{errorMessage}</p>}
              
               <button type="submit" className='login-button'>login</button>
               <p className='forgot-password'><Link to="/forgotpassword">Forgot Password?</Link></p>
               <p className='dont-have-account'>Don't Have an Account?<span className='signup-text'><Link to="signup">Sign Up</Link></span></p>
               
            </div>
            </div>
            </form>
        )
    }
}
export default Login