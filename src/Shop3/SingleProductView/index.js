import {Component} from 'react'

import './index.css'
import {Container,Row,Col} from 'react-bootstrap'
import ProductView from './accordain'
import Sidebar from '../../Sidebar/index'
import ShopNavebar from '../navbar'
import BottomNavbar from '../../Home/bottomNavbar'
import Button from 'react-bootstrap/button'
import ProjectPopup from './projectPopup'

const initialreferenceImagesList=[{
    refrerdImg:"https://media.istockphoto.com/id/1047335262/photo/kitchen-interior-with-sink-cabinets-stainless-steel-in-new-luxury-home.jpg?s=612x612&w=0&k=20&c=1bo0q4tiWTFx62fETfU1czUKudoVkdKKzdbkBmPeg-E=",

},{
    refrerdImg:"https://cdn.trendir.com/wp-content/uploads/2016/12/Villeroy-Boch-kitchen-sink.jpg"

},
{
    refrerdImg:"https://assets-news.housing.com/news/wp-content/uploads/2022/02/01225202/8-latest-bathroom-sink-designs-shutterstock_1670779702-1200x700-compressed.jpg"

},
{
    refrerdImg:"https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/02/20165417/07.png"
},]
class SingleProductView extends Component{
    state={referenceImagesList:initialreferenceImagesList}

    getProductsData= async()=>{
       
        const {match}=this.props
        const {params}=match
        const{id}=params
        const response=await fetch(`https://apis.ccbp.in/blogs/${id}`)
       const data=await response.json()
       console.log(data)
    }
    componentDidMount(){
        this.getProductsData()
    }
    render(){
      
        return(
            <>
            <div className='bg-container-product-view'>
            <div className='dash-row'>
            <div className='sidebar-container'>
            <Sidebar/>
            </div> 
            <ShopNavebar/>         
            <div className='bg-container1 shadow'>
              
            <Container>
                <Row>
                    <Col md={6}>
                        <img alt="products" src="https://images.timesproperty.com/blog/2071/unnamed_84.jpg" className='img-fluid productSize'/>
                        <div className='referImgDiv'>
                           <img alt="smallimg" src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/02/20165417/07.png" className="referedImg"/>
                           <img alt="smallimg" src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/02/20165417/07.png" className="referedImg"/>
                        </div>
                    </Col>
                    <Col md={6}>
                       <div className='descDiv'>
                        <h5>KOHLER BEAM SINK TANK</h5>
                        <h5>MRP : <span className="discountText"> ₹2,500.00 </span> ₹1,599.00</h5>
                       <ProductView/>
                       <ProjectPopup/>
                       <Button varient="secondory" className="ml-4">Get Quote</Button>
                       <Button varient="secondory" className="ml-4">Add to Wishlist</Button>
                       </div>
                    </Col>
                </Row>
            </Container>
            <BottomNavbar/>
        </div>
        </div>
        </div>
        </>
        )
    }
}
export default SingleProductView