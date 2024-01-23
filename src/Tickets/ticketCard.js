import{Link} from 'react-router-dom'
import './index.css'

const TicketCard=(props)=>{
    const {ticketCards}=props
    const {date,status,productStatus,ticketId,id}=ticketCards
    return(
       <tbody>
        <tr>
        <td>{date}</td>
        <td><Link to={`/tickets/${id}`}>{status}</Link></td>
        <td>{ticketId}</td>
        <td>{productStatus}</td>
        </tr>
       </tbody>
    )
}
export default TicketCard