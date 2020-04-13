import React,{Component,button,Image} from 'react';
import { Badge} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mrs_logo from './mrs_logo.png';
import guc_logo from './guc_logo.png';
//import WelcomePage from './routes/WelcomePage';
/*const WelcomePage =() =>{
  return(
<div>
<p>Our LAB is for </p>
<small> Main Page </small>
</div>  );
};*/
//import VelocityModal from './auth/VelocityModal';
import {AppNavbar} from './AppNavbar';
import {Link,withRouter,Redirect} from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Toast, ToastBody, ToastHeader,
  Row,Col
} from 'reactstrap';
//import history from "./utils/history";

import "../App.css"
//import mrs_logo from "./C:/Users/hp/Documents/lab on a chip/Modern1/mrs_logo.png";



class WelcomePage extends Component{
/*  constructor(props) {
    super(props, context);
    //do something...
} */    
render(){
  return (
   
    <div className="container"  style={{
      backgroundColor: 'lightgrey',
      backgroundSize: "cover"
    }}>
 
  
<Navbar color="dark" dark expand="l" className="mb-5" className="navbar1" >

             <Container>
            
          <NavbarBrand href="/">  <font size="6">Home page of MRS E-lab  <img alt="logo" className="photo" src={mrs_logo} /> </font>
           
           
           </NavbarBrand>
          
           </Container>
        
            </Navbar>
                 <div className="p-3 bg-secondary my-2 rounded">
     <Toast>
           <ToastHeader ><font size="4">
             About E-labs:
             </font></ToastHeader>
           <ToastBody>
          E-labs are labs where experimental devices and exprimeneters are in different place and there is a camera that broadcast a video of the experiment.As the lab exists via the internet so students can access a global website and making a real experiment that they watch from their screens in any place. MRS lab provides this technology which is a remote lab for engineering education.  
           </ToastBody>
         </Toast>
         </div>
         <div className="p-3 bg-dark my-2 rounded">
        

    <Toast>
          <ToastHeader ><font size="4">
            Brief description about MRS Lab: <img alt="logo" className="photo" src={mrs_logo} />
           
            <img alt="logo1" className="photo1" src={guc_logo} />
            
            </font></ToastHeader>
          <ToastBody>
           MRS ( Multi-Robot Systems) research group in GUC aims to conduct multidisciplinary research and development activities in the area of Multi robotics and autonomous systems. In order to bridge the gap between research, application and community.
          </ToastBody>
        </Toast>
        </div>
       
        <h> <font size="5">Welcome to our Remote lab<Badge color="primary" primary expand="me"> :) </Badge> </font></h>
        

         <p>If you want to register/login in order to know & conduct our experiment press the following link:
         <Link to="/AppNavbar" className="nav-link">
                Register/Login
              </Link> </p>
              
    </div>
    
  );
}}

export default  withRouter(WelcomePage);



