import {Component} from 'react'
import ShopNavebar from '../navbar'
import Sidebar from '../../Sidebar'
import './index.css'
import TitlebarImageList from './shopproducts2'
import BottomNavbar from '../../Home/bottomNavbar'


class ShopProducts extends Component{
    render(){
        return(
            <div>
            <div className='d-flex flex-row'>
            <Sidebar/>
            <div className='d-flex flex-column shop3-container'>
            <ShopNavebar/>
            <div className='d-flex flex-row'>
            <TitlebarImageList/>
            <div className='ml-1 d-none d-lg-block'>
           <TitlebarImageList/>
           </div>
            </div>
            <BottomNavbar/>
                </div>
            </div>
            </div>
        )
    }
}
export default ShopProducts