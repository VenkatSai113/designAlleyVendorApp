import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css'
import Sidebar from '../Sidebar';
import TopNavbar from '../Home/topNavbar';
import BottomNavbar from '../Home/bottomNavbar'

class DemoCarousel extends Component {
    render() {
        return (
            <div className='shop2-bg-container'>
                <Sidebar/>
                <div className='d-flex flex-column carousel-div'>
                <div >
                    <div id="home-top-navbar-container">
                    <TopNavbar/>
                    </div>
                    <p>Explore By Category</p>
            <Carousel>
                <div>
                    <img  alt="residentia" className='carousel-image' src="http://cdn.home-designing.com/wp-content/uploads/2017/02/kitchen-island-industrial-style-adjustable-lamps.jpg" />
                    <p className="legend">Residential</p>
                </div>
                <div>
                    <img alt="commercial" src="https://cdn2.hubspot.net/hubfs/4613040/Blogs/SamTell-Blog-Principles-of-Commercial-Kitchen-Floor-Plans-for-Efficient-Flow.jpg" />
                    <p className="legend">commercial</p>
                </div>
                <div>
                    <img  alt="Office" src="https://foyr.com/learn/wp-content/uploads/2021/08/modern-office-design-1-1024x585.png" />
                    <p className="legend">Office</p>
                </div>
                <div>
                    <img alt="Renovation" src="https://cdn1.npcdn.net/images/16223648111c0df41650a9261a54bea04fdf456978.jpg?md5id=e935efd65cd5c29a938abb57ccde8d84&new_width=1200&new_height=1200&w=1466647023" />
                    <p className="legend">Renovation</p>
                </div>
            </Carousel>
            </div>
            
            <div  className='carousel-div'>
                    <p>Explore By Style</p>
            <Carousel>
                <div>
                    <img  alt="Modern"className='carousel-image' src="https://hips.hearstapps.com/hmg-prod/images/chad-dorsey-1600781774.jpg" />
                    <p className="legend">Modern</p>
                </div>
                <div>
                    <img alt="Contemporary" src="https://st.hzcdn.com/simgs/3a614c1b09a10e19_4-3004/contemporary-kitchen.jpg" />
                    <p className="legend">Contemporary</p>
                </div>
                <div>
                    <img alt="Traditional" src="https://media.architecturaldigest.com/photos/566f0cbe7663555568f29c9b/2:1/w_1999,h_999,c_limit/IMAGE%205%20traditional-kitchens-09.jpg" />
                    <p className="legend">Traditional</p>
                </div>
                <div>
                    <img alt="Transitional" src="https://cdn.blanco.com/media/01-bild/press/bcan/blogs/blog-16-(transitional-kitchen)/1-transitional-kitchen---header-2-image-640w-360h.jpg" />
                    <p className="legend">Transitional</p>
                </div>
            </Carousel>
            </div>
            <div  className='carousel-div'>
                    <p>Explore By Spaces</p>
            <Carousel>
                <div>
                    <img  alt="Modern"className='carousel-image' src="https://assets.architecturaldigest.in/photos/60084ce954beb9e516da8f7d/16:9/w_1280,c_limit/Living-room-design-for-more-space-1366x768.jpg" />
                    <p className="legend">Living Room</p>
                </div>
                <div>
                    <img alt="Contemporary" src="http://cdn.home-designing.com/wp-content/uploads/2018/08/modern-platform-bedroom-sets.jpg" />
                    <p className="legend">Bed Room</p>
                </div>
                <div>
                    <img alt="Traditional" src="https://stylesatlife.com/wp-content/uploads/2020/01/Luxury-hall-design.jpg.webp" />
                    <p className="legend">Hall</p>
                </div>
                <div>
                    <img alt="Transitional" src="https://img.staticmb.com/mbcontent//images/uploads/2023/1/kitchen-design-ideas.jpg" />
                    <p className="legend">Kitchen</p>
                </div>
            </Carousel>
            </div>
            <div  className='carousel-div'>
                    <p>Explore By SubCategories</p>
            <Carousel>
                <div>
                    <img  alt="Modern"className='carousel-image' src="https://assets-news.housing.com/news/wp-content/uploads/2022/03/16195548/21-small-bathroom-tiles-design.jpg" />
                    <p className="legend">Tiles</p>
                </div>
                <div>
                    <img alt="Contemporary" src="https://v4-upload.goalsites.com/393/image_1651821332_IMG_1059.jpg" />
                    <p className="legend">Shink</p>
                </div>
                <div>
                    <img alt="Traditional" src="https://www.aquantindia.com/wp-content/uploads/2020/05/Aquant-Square-Rain-Showers.jpg" />
                    <p className="legend">Shower</p>
                </div>
                <div>
                    <img alt="Transitional" src="https://5.imimg.com/data5/SX/TI/MY-40185995/pvc-door-500x500.jpg" />
                    <p className="legend">Door</p>
                </div>
            </Carousel>
            <BottomNavbar/>
            </div>
            </div>
           
            </div>
        );
    }
};

export default DemoCarousel