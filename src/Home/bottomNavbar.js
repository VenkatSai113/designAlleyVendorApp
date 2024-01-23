import {GrHomeRounded} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import {FaRegPlusSquare} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom'

const BottomNavbar=()=>{
    return(
        <div id="footer" className="bottom-navbar">
        <Link to="/"><p className="notifications-icon1"><GrHomeRounded/></p></Link>
        <Link to="/explore"><p className="notifications-icon1"><BsSearch/></p></Link>
        <Link to="/createPost"><p className="notifications-icon1"><FaRegPlusSquare/></p></Link>
        <Link to="/shop"><p className="notifications-icon1"><FiShoppingCart/></p></Link>
        <Link to="/profile"><p className="notifications-icon1"><CgProfile/></p></Link>
       
       
      </div>
    )
}
export default BottomNavbar