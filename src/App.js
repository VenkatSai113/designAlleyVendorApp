import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Login from './Login'
import SelectDesign from './SelectDesign'
import Projects from './Projects/index'
import CreatePost from './CreatePost/index'
import Home from './Home/index'
import './App.css';
// import Shop from './Shop/shop'
import Trending from './Trending/index'
import Products from './Explore'
import Notifications from './Notifications'
import Activity from './Activity'
import Tickets from './Tickets'
//import DemoCarousel from './Shop2'
import Shop3 from './Shop3'
import Chats from './Chats'
import NotFound from './NotFound/index'
import ChatCon from './chatconversation'
import ProtectedRoute from './ProtectedRoute/index'
import ForgotPassword from './ForgotPassword'
import SignUp from './SignUp';
import Profile from './Profile'
import SavedPost from './SavedPosts'
import EditProfile from './EditProfile'
import ReviewAndRating from './Review'
import MobileViewComments from './Home/mobileViewComments'
import ShopProducts from './Shop3/Products/index'
import SingleProductView from './Shop3/SingleProductView/index'
import Spaces from './Spaces/index'
import OtpAuth from './OtpAuth'
import InviteDesigner from './Invitation'
import ProfileCreation from './CreatingProfile/index'
import VirtualToures from './VirtualToures/virtualtoure';
import ToureDetails from "./VirtualToures/toureDetails"
import Hotspots from './Hotspots/index';
import Aframess from "./Aframes"
import Viewer from "./Viewer"
function App() {
  return (
   <>
   <BrowserRouter>
   <Switch>
    <Route exact path="/login" component={OtpAuth}/>
    
    <Route  exact path="/hotspots" component={Hotspots}/>
    <Route  exact path="/selectDesign" component={SelectDesign}/>
    <Route  exact path="/viewer" component={Viewer}/>
    {/* <Route  exact path="/Aframess" component={VirtualToures}/> */}
    <Route  exact path="/invitation" component={InviteDesigner}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/createProfile" component={ProfileCreation}/>
    <Route  exact path="/projects" component={Projects}/>
    <Route  exact path="/createPost" component={CreatePost}/>
    <Route  exact path="/shop" component={Shop3}/>
    <Route  exact path="/trending" component={Trending}/>
    <Route  exact path="/explore" component={Products}/>
    <Route  exact path="/notifications" component={Notifications}/>
    <Route exact path="/virtualtoures" component ={Aframess}/>
    <Route  exact path="/activity" component={Activity}/>
    <Route  exact path="/support" component={Tickets}/>
    <Route  exact path="/chat" component={Chats}/>
    <Route  exact path="/profile" component={Profile}/>
    <Route  exact path="/chatconversation" component={ChatCon}/>
    <Route  exact path="/editprofile" component={ EditProfile}/>
    <Route  exact path="/savedposts" component={SavedPost}/>
    <Route  exact path="/reviewAndrating" component={ ReviewAndRating}/>
    <Route  exact path="/comments" component={MobileViewComments}/>
    <Route  exact path="/shopproducts" component={ShopProducts}/>
    <Route  exact path="/singleproductview" component={SingleProductView}/>
    <Route  exact path="/spaces:id" component={Spaces}/>
    <Route  exact path="/touredetails" component={ToureDetails}/>

    <Route exact path="/forgotpassword" component={ForgotPassword}/>
     {/* <Route exact path="/otplogin" component={OtpAuth}/> */}
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/not-found" component={NotFound}/>
    <Redirect to="/not-found"/>
   </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
