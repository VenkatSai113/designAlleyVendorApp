import './index.css'
import Sidebar from '../Sidebar'
import TopNavbar from '../Home/topNavbar'
import BottomNavbar from '../Home/bottomNavbar'

const Notifications=()=>{
    return(
        <div className='bg-container1'>
        <div className='dash-row'>
        <div className='sidebar-container'>
        <Sidebar/>
        </div>
        <TopNavbar/>
        <BottomNavbar/>
        <div className="bg-container-notifications ">
            <div className='notification-div1'>
                <img alt="notificationImg" src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/12/22103134/Cover-1.jpg" className='notification-img1'/>
                <p className='notification-text1'>Project Completed</p>
            </div>
            <p></p>
            <div className='notification-div1'>
                <img alt="notificationImg" src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/12/22103134/Cover-1.jpg" className='notification-img1'/>
                <p className='notification-text1'>Sink added to SR Interior</p>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Notifications