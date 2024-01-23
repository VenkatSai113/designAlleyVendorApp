import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";
import  ChatContainer from '../Chats/chatContainer'

class ChatCon extends Component{
    render(){
        return(
            <div className="d-flex flex-row">
              <Sidebar/>
              <TopNavbar/>
              <BottomNavbar/>
              <div className="chats-bg-container"></div>
            <ChatContainer/>
            </div>
        )
    }
}
export default ChatCon