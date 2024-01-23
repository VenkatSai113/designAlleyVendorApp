import {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion';

const iniialInformationItems=[{
    name:"L*H*B",
    id:1,
    desc:21*5*21
},
{
    name:"Brand",
    id:2,
    desc:"TATA"
},
{
    name:"Tax",
    id:3,
    desc:12
},
{
    name:"Shipping Fee",
    id:4,
    desc:50
},
{
    name:"Available Units",
    id:5,
    desc:20
},
{
    name:"Material",
    id:6,
    desc:"Kitchen"
},
{
    name:"Tag",
    id:7,
    desc:"Kitchen,Residentional,Sink"
},
{
    name:"Features",
    id:8,
    desc:"Long Losting Durability"
},
{
    name:"Finish",
    id:14,
    desc:"Stainless Steel"
},
{
    name:"Estimation Time to Delivery",
    id:9,
    desc:"20Days"
},
{
    name:"Categories",
    id:10,
    desc:"Residentional Official"
},
{
    name:"Sub Categories",
    id:11,
    desc:"Sink"
},
{
    name:"Styles",
    id:12,
    desc:"Modern,Contemporary"
},
{
    name:"Spaces",
    id:13,
    desc:"Living Room,Kitchen"
}]
const Information=(props)=>{
    const {informationItems}=props
    const {name,desc}=informationItems
    return(
        <p className="information"><strong>{name}</strong>: {desc}</p>
    )
}
class ProductView extends Component{
    state={informationItems:iniialInformationItems}
    render(){
        const {informationItems}=this.state
        return(
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
        The water flow is large and strong. It can easily clean vegetables and fruits and pots and pans, can also thoroughly rinse the kitchen sink. A good kitchen faucet keeps the kitchen and SUS304 sink clean and is a great convenience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Additional Information</Accordion.Header>
        <Accordion.Body>
            <div className='informationDiv'>
                {informationItems.map(eachItem=>
                <Information informationItems={eachItem} key={eachItem.id}/>
                    )}
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        )
    }
}
export default ProductView;