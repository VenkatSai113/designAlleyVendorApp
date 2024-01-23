import { Component } from "react";
import './index.css'
import Sidebar from '../Sidebar'
import BottomNavbar from '../Home/bottomNavbar'
import Button from 'react-bootstrap/Button';
import {BsBorderAll,BsFillImageFill} from 'react-icons/bs'
import {MdOutlineSlowMotionVideo} from 'react-icons/md'
import {FaTags} from 'react-icons/fa'
import ProfileTopNavbar from '../Account/profileTopNav'
import  ProdutsList from '../Explore/exploreImages'
import { Container,Row } from "react-bootstrap";

const initialProductDetails=[{
    id:1,
    name:"Sofa set",
    price:5000,
    image:"https://ii1.pepperfry.com/media/catalog/product/m/e/800x400/mersin-3-seater-sofa-in-teal-colour---amberville-in-pepperfry-mersin-3-seater-sofa-in-teal-colour----e6zofn.jpg"

},{
    id:2,
    name:"Tile",
    price:2000,
    image:"https://www.sakarmarbo.com/wp-content/uploads/2018/11/hero-soluble-salt-nano-tile-1.jpg"
}
,{
    id:3,
    name:"Shink",
    price:1000,
    image:"https://media.istockphoto.com/id/1047335262/photo/kitchen-interior-with-sink-cabinets-stainless-steel-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=1bo0q4tiWTFx62fETfU1czUKudoVkdKKzdbkBmPeg-E="

}
,{
    id:4,
    name:"Door",
    price:6000,
    image:"https://i.ytimg.com/vi/RY1lSaNfdH8/maxresdefault.jpg"
}
,{
    id:5,
    name:"Chair",
    price:3000,
    image:"https://stylesatlife.com/wp-content/uploads/2018/03/Wooden-Dining-Chairs.jpg"
}
,{
    id:6,
    name:"Ceiling",
    price:9000,
    image:"https://www.99homeplans.com/wp-content/uploads/2017/03/ceiling-color-ideas-decoration-home-interior.jpg"
}]

class Profile extends Component{
    state={productDetails:initialProductDetails}
    render(){
      
      const {productDetails}=this.state
        return(
            <div className="home-top-navbar-container">
               <ProfileTopNavbar/>
            <div>
            <div className="d-flex flex-row">
                <Sidebar/>
                <div>
                    <div className="emty-div"></div>
            <div className="saved-feed-container ">
                <div className="saved-profile-div">
                    <div>
                    <img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=" alt="profile" className="profile-image"/>
                    <p  className="saved-profile-name">Venkat_113</p>
                    </div>
                    <div>
                        <p className="saved-post-text">Posts</p>
                        <p className="post-number">100</p>
                    </div>
                    <div>
                        <p className="saved-post-text">Followers</p>
                        <p className="post-number">100</p>
                    </div>
                    <div>
                        <p className="saved-post-text">Following</p>
                        <p className="post-number">100</p>
                    </div>
                </div>
                <div className="saved-profile-div">
                <Button variant="primary">Edit Profile</Button>
                <Button variant="secondary">Share Profile</Button>
                </div>
                <div className="profile-tab-div">
                <p className="tab-profile-icon"><BsBorderAll/></p>
                <p className="tab-profile-icon"><BsFillImageFill/></p>  
                <p className="tab-profile-icon"><MdOutlineSlowMotionVideo/></p>
                <p className="tab-profile-icon"><FaTags/></p> 
                </div>
                <div>
                <div className="saved-uploaded-feed-div">
                    <Container>
                        <Row>
                        {productDetails.map(eactProduct=>
                    <ProdutsList productDetails={eactProduct} key={eactProduct.id} />)} 
                        </Row>
                        </Container>
            </div>
                </div>
            </div>
            <div className="d-flex flex-row">
            </div>
            </div>
            </div>
            </div>
        <BottomNavbar/>
            </div>
        )
    }
}
export default Profile