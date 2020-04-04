import React,{Component,button} from 'react';
import { Badge} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import WelcomePage from './routes/WelcomePage';
/*const WelcomePage =() =>{
  return(
<div>
<p>Our LAB is for </p>
<small> Main Page </small>
</div>  );
};*/

import {AppNavbar} from './AppNavbar';
import {Link,withRouter,Redirect} from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
//import history from "./utils/history";




class WelcomePage extends Component{
/*  constructor(props) {
    super(props, context);
    //do something...
} */    
render(){
  return (
   
    <div className="container">
 
 <Link to="/AppNavbar" className="nav-link">
                Register/Login
              </Link>  
<Navbar color="dark" dark expand="l" className="mb-5">
    
             <Container>
            
           <NavbarBrand href="/">  <font size="6">Home page of MRS E-lab </font></NavbarBrand>
           </Container>
        
            </Navbar>
           
      <h1>Welcome to our Remote lab<Badge color="primary" primary expand="me">:)</Badge></h1>
      <h> <font size="6"> Brief Description: </font></h>
    
 
    </div>
    
  );
}}

export default  withRouter(WelcomePage);



