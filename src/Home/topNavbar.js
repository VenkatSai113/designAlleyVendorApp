import './index.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {RiMessengerLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

 const TopNavbar=()=>{
    return(
        <div className="navbar-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="sidebar logo" className='navbar-logo'/>
        <div className="d-flex flex-row">
        <Link to="/notifications"><p className="notifications-icon"><IoIosNotificationsOutline/></p></Link>
        <Link to="/chat"><p className="notifications-icon ml-3 mr-2"><RiMessengerLine/></p></Link>
        </div>
        </div>
    )
}
export default TopNavbar