import {Component} from 'react'
import './index.css'
import BottomNavbar from '../Home/bottomNavbar'

const designs=[{
    imageUrl:"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg",
    name:"Modern",
    id:1
},
{
    imageUrl:"https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png",
    name:"Treditional",
    id:2
},
{
    imageUrl:"https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/12/22103134/Cover-1.jpg",
    name:"Contemporary",
    id:3
},
{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2022/08/25190515/interior-design-cost-in-bangalore.jpg",
    name:"Transitional",
    id:4
},
{
    imageUrl:"https://media.designcafe.com/wp-content/uploads/2020/02/21005335/interior-design-ideas-for-hall.jpg",
    name:"Beach",
    id:5
},
{
    imageUrl:"http://cdn.home-designing.com/wp-content/uploads/2019/04/living-room-pendant-light.jpg",
    name:"Mid Century",
    id:6
},
{
    imageUrl:"https://images.homify.com/c_fill,f_auto,q_0,w_740/v1495001963/p/photo/image/2013905/CAM_2_OPTION_1.jpg",
    name:"Nautical",
    id:7
},
{
    imageUrl:"https://goodhomes.wwmindia.com/content/2022/jun/infusing-wood-in-this-neutral-themed-home.jpg",
    name:"Mediterranean",
    id:8
}]

const SelectedImages=(props)=>{
    const {design}=props
    const {imageUrl,name}=design

    return(
        <>
        <div className='image-containers'>
        <label>
        <input type="checkbox" name="test" value="small" />
        <img src={imageUrl} alt="Option 1" className='design-style'/>
      </label>
          <p className='design-name'>{name}</p>
        </div>
        
      </>
    )
}

class SelectDesign extends Component{
    onSubmitCatalog=()=>{
        const {history}=this.props
        history.replace("/")
    }
    render(){
        return(
            <div className="select-design-bg-container">
                <div className='cards-container1'>                   
                <BottomNavbar/>
                    {designs.map(eachImage=>
                        <SelectedImages design={eachImage} key={eachImage.id}/>)}
                </div>
                <button type='button' onClick={this.onSubmitCatalog} className='login-button1' >Submit</button>
            </div>
        )
    }
}
export default SelectDesign