import {Component} from 'react'
import './index.css'
import {FiSend} from 'react-icons/fi'

class ChatContainer extends Component{
    render(){
        return(
            <div className="chatlist-container1">
              <div className='chat-profile-div'>
              <img alt="" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" className="profile-image-chats1"/>
              <label className="suggestion-profile-name ml-3">Venkat_113</label>
              </div>
              <div className='messages-container'>
                <p className='sending-messages'>How May I help you?</p>
                <p className='chat-date'>Feb 26 2023</p>
                <p className='receiving-messages'>I need 2BHK Interior Design</p>
                <p className='sending-messages'>I will send the Qutation Please go throug it once.</p>
                <p className='sending-messages'>How May I help you?</p>
                <p className='chat-date'>Feb 26 2023</p>
                <p className='receiving-messages'>I need 2BHK Interior Design</p>
                <p className='sending-messages'>I will send the Qutation Please go throug it once.</p>
                <p className='sending-messages'>How May I help you?</p>
                <p className='chat-date'>Feb 26 2023</p>
                <p className='receiving-messages'>I need 2BHK Interior Design</p>
                <p className='sending-messages'>I will send the Qutation Please go throug it once.</p>
                <p className='sending-messages'>How May I help you?</p>
                <p className='chat-date'>Feb 26 2023</p>
                <p className='receiving-messages'>I need 2BHK Interior Design</p>
                <p className='sending-messages'>I will send the Qutation Please go throug it once.</p>
              </div>
              <div className='chat-input-container'>
               <input type="text" className='message-input' placeholder='Message...'/>
               <button type="button" className='msg-send-btn'><FiSend/></button>
              </div>
             </div> 
        )
    }
}
export default ChatContainer