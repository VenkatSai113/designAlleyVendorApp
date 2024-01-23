
import {Component} from 'react'
import Sidebar from '../Sidebar'
import Button from 'react-bootstrap/Button';
import './index.css'
import {Container,Row,Col} from 'react-bootstrap'
let WrittenText=null
class TicketOverView extends Component{
    state={buttonText:"Raise a Ticket",ticketText:false,ticketPara:"",submitText:false,subjectText:""}
   
    raiseTicket=()=>{
        this.setState({buttonText:'Post Reply'})
        this.setState({ticketText:true})
    }
    onChangeTicket=(event)=>{
         WrittenText=event.target.value
    }
    submitButton=()=>{
        this.setState({submitText:true})
        this.setState({ticketPara:WrittenText})
    }
    render(){
        const {buttonText,ticketText,ticketPara,submitText}=this.state
        return(
            <>
            <div className='bg-container'>
            <div className='dash-row'>
            <div className='sidebar-container'>
            <Sidebar/>
            </div>
            <div className='dashboard-container'>
                <h3 className='dash-heading'>Ticket OverView</h3>
                <div className='product-containers'>
                    <table>
                        <thead>
                            <th>Ticket ID</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Created On</th>
                            <th>Last Update</th>
                        </thead>
                        <tbody>
                            <td>1234</td>
                            <td>Support</td>
                            <td>Open</td>
                            <td>Aug 14,2023</td>
                            <td>Aug 31,2021</td>
                        </tbody>
                    </table>
                    <Button variant="primary" onClick={this.raiseTicket} className='mt-3'>{buttonText}</Button>
            {ticketText && <div>
                <Container>
                    <Row>
                        <Col md={6}>
                        <label htmlFor="department" className='projectName'>Department</label>
                        <select id="department" className='form-control'>
                            <option>
                                Sales
                            </option>
                            <option>
                                Technical
                            </option>
                        </select>
                        </Col>
                        <Col md={6}>
                        <label className='projectName'>Subject</label>
                        <input type="text" className='form-control'/>
                        </Col>
                    </Row>
                </Container>
                <textarea rows='7' cols='136' className='form-control mt-3' onChange={this.onChangeTicket} placeholder='Write your Query here.....'></textarea>
            <Button variant="success" onClick={this.submitButton} className='mt-3'>Submit</Button>
            {submitText && <div className="ticketParagraphDiv"><p className='projectName'>{ticketPara}</p></div>}</div>}
            </div>            
            </div>       
        </div>
        </div>
        </>
        )
    }
}
export default TicketOverView
