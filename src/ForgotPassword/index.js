import {Component} from 'react'
import './index.css'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'

class ForgotPassword extends Component{
    render(){
        return(
            <div className='forgot-password-bg-container'>
                <div className='forgot-password-container'>
                  <div className="profile-icon-div">
                    <CgProfile className='profile-icon'/>
                  </div>
                  <h3 className='trouble-text'>Trouble logging in?</h3>
                  <p className='information-text'>Enter your email,phone or username and <br></br>we'll send you a link to getback into your account</p>
                  <input type="text" className='username-input-filed'/>
                  <button className='login-button'>Send Login Link</button>
                  <hr></hr>
                  <p className='information-text-1'>create New Account</p>
                  <div className='bottom-login-div'>
                  <p className='information-text-1'><Link to="/login">Back to Login</Link></p>
                  </div>
                </div>
            </div>
        )
    }
}
export default ForgotPassword