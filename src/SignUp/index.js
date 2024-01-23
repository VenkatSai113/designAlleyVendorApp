import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import IndividualDesigener from './individualDesigener'
import OrganizationDetails from './organizationDetails'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

class SignUp extends Component{
    state={Organization:false,individual:false}
    onChangeDesigener=(event)=>{
        if(event.target.value==="Organization"){
            this.setState({
                Organization:true
            })
            this.setState({
                individual:false
            })
        }
        else{
            this.setState({
                Organization:false
            })
            this.setState({
                individual:true
            })

        }

    }
    render(){
        const {Organization,individual}=this.state
        return(
            <div className='forgot-password-bg-container1'>
                <div className='forgot-password-container1'>
                 <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" className='logo-image-signup'/>
                  <input type="radio"/>
                  <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" className='select-text'>Select Only One</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <div className='d-flex flex-row justify-content-around'>
       <label className="radio-style"> <FormControlLabel   onChange={this.onChangeDesigener}  value="Organization" control={<Radio />}  label="Organization" /></label>
       <label className="radio-style"><FormControlLabel  onChange={this.onChangeDesigener} value="individual desigener" control={<Radio />} label="Individual Designer" /></label>
        </div>
      </RadioGroup>
    </FormControl>
    <div className='body-content'>
                {Organization&& <OrganizationDetails/>}
                {individual&&<IndividualDesigener />}
               </div>

                 
                 
                  <hr></hr>                
                  <div className='bottom-login-div'>
                  <p className='information-text-1'><span className='information-text'>Have An Account? </span><Link to="/login">  Login</Link></p>
                  </div>
                </div>
            </div>
        )
    }
}
export default SignUp