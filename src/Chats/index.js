import { Component } from "react";
import {Link} from 'react-router-dom'
import './index.css'
import Sidebar from '../Sidebar'
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import  ChatContainer from './chatContainer'


class Chats extends Component{
    render(){
        return(
            <div className="d-flex flex-row">
              <Sidebar/>
              <TopNavbar/>
              <BottomNavbar/>
              <div className="chats-bg-container"></div>
             <div className="chatlist-container">
                <div className="chat-card-container">
                    <img alt="" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" className="profile-image-chats"/>
                    <div className="profile-name-designation">
                <label className="suggestion-profile-name">Venkat</label>
                <label className="suggestion-profile-desigenaton">Active 5 Minuties ago</label>
              </div>
                </div>
                <Link className="chat-card-container" to="/chatconversation">
                    <img  alt="" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" className="profile-image-chats"/>
                    <div className="profile-name-designation">
                <label className="suggestion-profile-name">Venkat</label>
                <label className="suggestion-profile-desigenaton">Active 5 Minuties ago</label>
              </div>
                </Link>
                <div className="chat-card-container">
                    <img  alt="" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" className="profile-image-chats"/>
                    <div className="profile-name-designation">
                <label className="suggestion-profile-name">Venkat</label>
                <label className="suggestion-profile-desigenaton">Active 5 Minuties ago</label>
              </div>
                </div>
                <div className="chat-card-container">
                    <img  alt="" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" className="profile-image-chats"/>
                    <div className="profile-name-designation">
                <label className="suggestion-profile-name">Venkat</label>
                <label className="suggestion-profile-desigenaton">Active 5 Minuties ago</label>
              </div>
                </div>
                <div className="chat-card-container">
                    <img  alt="" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" className="profile-image-chats"/>
                    <div className="profile-name-designation">
                <label className="suggestion-profile-name">Venkat</label>
                <label className="suggestion-profile-desigenaton">Active 5 Minuties ago</label>
              </div>
                </div>
             </div>
            <ChatContainer/>
            </div>
        )
    }
}
export default Chats