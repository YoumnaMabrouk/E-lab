import React,{Component,Fragment} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Toast, ToastBody, ToastHeader
  } from 'reactstrap';
  import mrs_logo from './mrs_logo.png';
import {getVelocities,deleteVelocities,addVelocities} from '../actions/velocityAction';
import VelocityModal from './auth/VelocityModal';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  import RegisterModal from './auth/RegisterModal';
  import LoginModal from './auth/LoginModal';
  import Logout from './auth/Logout';
  import {WelcomePage} from './WelcomePage';
  import guc_logo from './guc_logo.png';


  class AppNavbar extends Component{
   
      state={
          isOpen : false
      };
static propTypes ={
  auth :PropTypes .object.isRequired
}

    toggle =() => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
     
     const { isAuthenticated,user} =this.props.auth;
      const authLinks= (
        <Fragment>
          <NavItem>
          <span className="navbar-text mr-3">
          <strong>
            {user ? `Welcome ${user.name} :)` : ''}
          </strong>
        </span>
          </NavItem>
      <NavItem>
       <Logout/>
      </NavItem>
      </Fragment>
       );
       const guestLinks =(
        <Fragment>
        <NavItem>
       < RegisterModal/>
       </NavItem>
       <NavItem>
      <LoginModal/> 
       </NavItem>
        </Fragment>
       );

        return(
            <div  style={{
              backgroundColor: 'lightgrey',
              backgroundSize: "cover"
            }}> 
  <p>
  <Link to="/" >
      Home
    </Link>
    </p>
    
            <Navbar color="dark" dark expand="l" className="mb-5">
             
              <Container>
                
            <NavbarBrand href="/"> <font size="6"> <p><img alt="logo" className="photo" src={mrs_logo} />
           </p> <p> <img alt="logo1" className="photo1" src={guc_logo} /></p>  </font></NavbarBrand>
           <NavbarBrand>  <font size="6">E-lab </font></NavbarBrand>
                  <Nav className="ml-auto" navbar>
                  {isAuthenticated ? authLinks : guestLinks}
                   
                  </Nav>
              
              </Container>
            </Navbar>
            <div className="p-3 bg-secondary my-2 rounded">
    
    <Toast>
          <ToastHeader ><font size="4">
            About the experiment:
            </font></ToastHeader>
          <ToastBody>
           In this experiment,we have a 3-omnidirectional mobile wheel robot that the student enters 3 values of velocities (in rpm) to control its speed & there is a specific path that we want the robot to track by its wheels moving with speeds written by the student. 
          </ToastBody>
        </Toast>
        </div>
        <div className="p-3 bg-dark my-2 rounded">
    
    <Toast>
          <ToastHeader ><font size="4">
            How to start the experiment?
            </font></ToastHeader>
          <ToastBody>
           After registering ,user has to login and then a link of the experiment will appear in the bottom of the page.Then user will be asked to enter the velocities and start the experiment watching it through the camera in the lab .And after finishing graphs and results will be sent if user presses on th related buttons.
          </ToastBody>
        </Toast>
        </div>
   
            
            
      
    {isAuthenticated ? (<p> <Link to="/Velocity" >
      Experiment
    </Link> </p> ): null}             
 
    
          </div> 

        );
       
    }
}
  
const mapStateToProps =state => ({
  auth:state.auth
});
  export default connect (mapStateToProps ,null)((AppNavbar));
 
  
  