import './index.css'
import {Link} from 'react-router-dom'

const Materials=(props)=>{
    const { matrtielsProp}=props
    const {materialImage,materialName}=matrtielsProp
    return(
        <div className="material-coloumn-div">          
       <Link to="/shopproducts"> <img src={materialImage} alt={materialName}className="material-image"/></Link>
        <p className='material-name'>{materialName}</p>
    </div>
    
    )
}
export default Materials