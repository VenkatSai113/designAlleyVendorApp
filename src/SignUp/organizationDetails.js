import {Component} from 'react'
import './index.css'
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import UploadLogo from './uploadLogo'

class OrganizationDetails extends Component{
    state={name:"",address:"",email:"",PhoneNumber:"",area:"",gstNumber:"",logo:"",budget:"",bankName:"",accountNumber:"",branch:"",ifscCode:"",nameError:"",PhoneNumberError:"",addressError:"",areaError:"",budgetError:"",bankNameError:"",accountNumberError:"",branchError:"",ifscCodeError:"",nameStatus:false,
    addressStatus:false,emailStatus:false,emailError:"",areaStatus:false,budgetStatus:false,bankNameStatus:false,accountNumberStatus:false,branchStatus:false,ifscCodeStatus:false,PhoneNumberStatus:false}
      requiredHandle=(event)=>{
          const {name,value}=event.target
          this.setState({
              [name]:value
          })
      }
      onSubmitSignUp=()=>{
  
        const {name,address,email,area,budget,bankName,accountNumber,branch,ifscCode,PhoneNumber}=this.state
          if(name===""){
              this.setState({nameError:"Name is Requeried"})
              this.setState({nameStatus:true})
          }
          else{
              this.setState({nameError:""})
              this.setState({nameStatus:false})
          }
          if(address===""){
              this.setState({addressError:"Address is Requeried"})
              this.setState({addressStatus:true})
          }
          else{
              this.setState({addressError:""})
              this.setState({addressStatus:false})
          }
          if(email===""){
              this.setState({emailError:"Email is Requeried"})
              this.setState({emailStatus:true})
          }
          else{
              this.setState({emailError:""})
              this.setState({emailStatus:false})
          }
          if(area===""){ 
              this.setState({areaError:"Area/City is Requeried"})
              this.setState({areaStatus:true})
          }
          else{
              this.setState({areaError:""})
              this.setState({areaStatus:false})
          }
          if(budget===""){
              this.setState({budgetError:"Budget is Requeried"})
              this.setState({budgetStatus:true})
          }
          else{
              this.setState({budgetError:""})
              this.setState({budgetStatus:false})
          }
          if(bankName===""){
              this.setState({bankNameError:"Bank Name is Requeried"})
              this.setState({bankNameStatus:true})
          }
          else{
              this.setState({bankNameError:""})
              this.setState({bankNameStatus:false})
          }
          if(accountNumber===""){
              this.setState({accountNumberError:"Account number is Requeried"})
              this.setState({accountNumberStatus:true})
          }
          else{
              this.setState({accountNumberError:""})
              this.setState({accountNumberStatus:false})
          }
          if(branch===""){
              this.setState({branchError:"Branch is Requeried"})
              this.setState({branchStatus:true})
          }
          else{
            const {branch}=this.state
            console.log(branch)
              this.setState({branchError:""})
              this.setState({branchStatus:false})
          }
          if(ifscCode===""){
              this.setState({ifscCodeError:"Ifsc code is Requeried"})
              this.setState({ifscCodeStatus:true})
          }
          else{
              this.setState({ifscCodeError:""})
              this.setState({ifscCodeStatus:false})
          }
          if(PhoneNumber===""){
            this.setState({PhoneNumberError:"Mobile Number  is Requeried"})
            this.setState({PhoneNumberStatus:true})
        }
        else{
            this.setState({PhoneNumberError:""})
            this.setState({PhoneNumberStatus:false})
        }
      }
      render(){
        const {name,address,email,area,budget,bankName,accountNumber,branch,ifscCode,nameError,nameStatus,emailStatus,areaError,budgetError,bankNameError,accountNumberError,branchError,ifscCodeError,
            addressStatus,PhoneNumber,PhoneNumberError,PhoneNumberStatus,emailError,areaStatus,budgetStatus,bankNameStatus,accountNumberStatus,addressError,branchStatus,ifscCodeStatus}=this.state
          return(
             
             <> <div className="elements-div mt-2"><label className='property mt-3' htmlFor="residentType">Organization Name</label>
                <div className='text-element-residential'>
                <input type="text" className='form-control' value={name} placeholder=" Enter Your name" name="name" onChange={this.requiredHandle}/></div>
              
              </div> 
              {nameStatus&&<p className='error-msg'>*{nameError}</p>}
               <div className="elements-div mt-2">
              <label className='property mt-3'>Address</label>
              <div className='text-element-residential'>
              <textarea row="13" cols="50" value={address} className='form-control mb-3' name="address" placeholder=' Enter your address' onChange={this.requiredHandle}>
  
              </textarea>
             
                 </div>
                 </div>
                 {addressStatus&&<p className='error-msg'>*{addressError}</p>}
                 <div className="elements-div">
                 <label className='property mt-3'>Email Id</label>
                 <div className='text-element-residential'>
                 <input type="email" className='form-control' value={email} placeholder=" Enter Valid Email id" name="email" onChange={this.requiredHandle} />
                  </div>
                  </div>
                  {emailStatus&&<p className='error-msg'>*{emailError}</p>}
                  <div className="elements-div">
               <label className='property mt-3'>Mobile Number</label>
               <div className='text-element-residential'>
               <input type="email" className='form-control' value={PhoneNumber} placeholder="Enter Valid Mobile number id" name="PhoneNumber" onChange={this.requiredHandle} />
                </div>
                </div>
                {PhoneNumberStatus&&<p className='error-msg'>*{PhoneNumberError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>Area/City </label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control'  value={area}  placeholder=" Enter Area/City" name="area" onChange={this.requiredHandle} />
                  </div>
                  </div>
                  {areaStatus&&<p className='error-msg'>*{areaError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>Logo</label>
                  <div className='text-element-residential'>
                  <UploadLogo/>
                  </div>
                  </div>
                  <div className="elements-div">
                <label className='property mt-3'>GST Number</label>
                <div className='text-element-residential'>
                <input type="text" className='form-control'  placeholder=" Enter GST Number" name="timeDuration" />
                </div>
                </div>
                  <div className='w-100'>
                      <div className="elements-div">
                  <label className='property mt-3'>Budget</label>
                  <div className='text-element-residential'>
                <input type="number" className='form-control' value={budget} placeholder='Enter Minimun Budget'  name="budget" onChange={this.requiredHandle} />
                </div>
                </div>
                {budgetStatus&&<p className='error-msg'>*{budgetError}</p>}
                <div className="bank-details-div">
                <label className='bank-details mt-3'>Bank Details</label>
                </div>
               
                <div className="elements-div">
                  <label className='property mt-3'>Bank Name</label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control' value={bankName} placeholder=" Enter Bank Name" name="bankName" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  {bankNameStatus&&<p className='error-msg'>*{bankNameError}</p>}
                <div className="elements-div">
                  <label className='property mt-3'>Account Number</label>
                  <div className='text-element-residential'>
                  <input type="number" className='form-control'  value={accountNumber} placeholder=" Enter Bank Account Number" name="accountNumber" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  {accountNumberStatus&&<p className='error-msg'>*{accountNumberError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>Branch</label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control' value={branch}  placeholder=" Enter Branch" name="branch" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  {branchStatus&&<p className='error-msg'>*{branchError}</p>}
                  <div className="elements-div">
                  <label className='property mt-3'>IFSC Code</label>
                  <div className='text-element-residential'>
                  <input type="text" className='form-control' value={ifscCode}  placeholder=" Enter IFSC Code" name="ifscCode" onChange={this.requiredHandle} />
                  </div>
                  </div> 
                  
                  {ifscCodeStatus&&<p className='error-msg'>*{ifscCodeError}</p>}
                <div className="elements-div">
               
                  <div className='text-element-residential'>
                 
               <div>
                </div>
                </div>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <button className='login-button' onClick={this.onSubmitSignUp}>Sign Up</button>
                </div>
                 </div>
                 </>
          )
      }
}
export default withRouter(OrganizationDetails)