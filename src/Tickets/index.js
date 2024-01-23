
import {Component} from 'react'
import Sidebar from '../Sidebar'
import TicketCard from './ticketCard'
import './index.css'

const ticketCard=[{
    id:1,
    date:'01/02/2023',
    status:"Payment Pending",
    catagery:"open",
    productStatus:"Payment",
    ticketId:'12345'
},
{
    id:2,
    date:'01/02/2023',
    status:"Delivery Product",
    catagery:"open",
    productStatus:"Delivery",
    ticketId:'56789'
},
{
    id:3,
    date:'01/02/2023',
    status:"Payment Pending",
    catagery:"Closed",
    productStatus:"Payment",
    ticketId:'09876'
},
{
    id:4,
    date:'01/02/2023',
    status:"Payment Pending",
    catagery:"Closed",
    productStatus:"Payment",
    ticketId:'09876'
}]
class Tickets extends Component{

    render(){
        return(
            <>
            <div className='bg-container'>
            <div className='dash-row'>
            <div className='sidebar-container'>
            <Sidebar/>
            </div>
            <div className='dashboard-container'>
                <h3 className='dash-heading'>Tickets</h3>
                <div className='product-containers'>
                  
                   <table className='mt-3'>
                    <thead>
                        <th>
                            Date
                        </th>
                        <th>
                            Subject
                        </th>
                        <th>
                            Ticket ID
                        </th>
                        <th>
                            Status
                        </th>
                    </thead>
                    {ticketCard.map(eachCard=>
                    <TicketCard ticketCards={eachCard} key={eachCard.id}/>)}
                   </table>
            </div>
            </div>       
        </div>
        </div>
        </>
        )
    }
}
export default Tickets