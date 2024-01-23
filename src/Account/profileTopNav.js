import './index.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {Link} from 'react-router-dom'
import NavbarItems1 from './reactModel'

 const ProfileTopNavbar=()=>{
    const moreItems=()=>{
        console.log("Hello")
    }
    return(
        <>
        <div className="navbar-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaH0LjkGcZ197-k9_-J5Oyp8XEJMcntEQ5SQJCDkqHA&s" alt="sidebar logo" className='navbar-logo'/>
        <div className="d-flex flex-row">
        <Link to="/notifications"><p className="notifications-icon"><IoIosNotificationsOutline/></p></Link>
        <p className="notifications-icon ml-3 mr-4" onClick={moreItems}><NavbarItems1/></p>
        </div>
        </div>
    </>
    )
}
export default ProfileTopNavbar