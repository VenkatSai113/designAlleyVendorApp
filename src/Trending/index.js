import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import FeedContainer from '../Home/FeedContainer'
import TopNavbar from "../Home/topNavbar";
import BottomNavbar from "../Home/bottomNavbar";

const initialFeeds=[{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://s3images.zee5.com/wp-content/uploads/2021/08/aa2ca5d9-883f-4d12-8fdb-2fa13bc6d1b5-Carpetright-House-Beautiful-Portobello-Carpet-In-Riverside-designsecrets.jpeg",
    id:1
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://media.designcafe.com/wp-content/uploads/2022/08/25190515/interior-design-cost-in-bangalore.jpg",
    id:2
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"http://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg",
    id:3
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://assets-news.housing.com/news/wp-content/uploads/2022/02/18205828/Minimalist-interior-design-Tips-to-make-your-home-look-minimal.jpg",
    id:4
},
{
    profileName:"Introvert_janu",
    profileImage:"https://savvywomen.tomorrowmakers.com/sites/default/files/2020-03/women%20entrepreneurship.jpg",
    feedImage:"https://5.imimg.com/data5/SELLER/Default/2020/11/VA/PT/WD/63934041/whatsapp-image-2020-11-27-at-15-37-27-2--500x500.jpeg",
    id:5
}]

class Trending extends Component{
    state={stateFeeds:initialFeeds}
    render(){
        const {stateFeeds}=this.state
        return(
            <div className="home-top-navbar-container">
                <TopNavbar/>
                <BottomNavbar/>
            <div>
            <div className="d-flex flex-row">
                <Sidebar/>
                <div>
            <div className="d-flex flex-row">
            <div className="trending-feed-container">
                {stateFeeds.map(eachFeed=>
                   <FeedContainer stateFeed={eachFeed} key={eachFeed.id}/> )}
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Trending