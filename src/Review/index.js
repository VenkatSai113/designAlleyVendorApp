import {Component} from 'react'
import { AiFillStar } from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai'
import './index.css'
import Sidebar from '../Sidebar';
import TopNavbar from '../Home/topNavbar';
import BottomNavbar from '../Home/bottomNavbar';

class ReviewAndRating extends Component{
    state={productReview:"Nice Product I loved this one", icons:<><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>,installationReview:""}
    onClickReview=()=>{
      
        this.setState({productReview:"Nice Product I loved this one", icons:<><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>})
    }
    onClickInstallationReview=()=>{
        this.setState({productReview:"The way you deleverd the product is too good", icons:<><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>})

    }

    render(){
        const {productReview,icons}=this.state
        return(
            <>
            < Sidebar/>
            <TopNavbar/>
            <BottomNavbar/>
            <div className="review-bg-container ">
                <div className='pamyment-text '>
                <label className='paymentType mt-5 pt-3'>
                    <input  type="radio" name="test" value="small" checked/>
                    <p onClick={this.onClickReview}>Product Review</p>
                </label>
                <label className='paymentType'>
                    <input type="radio" name="test" value="big"/>
                    <p onClick={this.onClickInstallationReview}>Installation Review</p>
                </label>
            </div>
            <hr></hr>
            <div className='table-div'>
                <div className='flexDiv'>
                <h1>{productReview}</h1>
                <p>{icons}</p>
                </div>
    </div> 
            </div>
            </>
        )
    }

}
export default ReviewAndRating