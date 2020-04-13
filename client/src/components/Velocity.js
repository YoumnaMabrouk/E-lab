import React,{Component,Fragment} from 'react';
import {Link,withRouter, Prompt} from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Toast, ToastBody, ToastHeader,
    ListGroup,ListGroupItem
  } from 'reactstrap';
  //import Velocities from './models/Velocities';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  //import RegisterModal from './auth/RegisterModal';
  //import LoginModal from './auth/LoginModal';
  import Logout from './auth/Logout';
  //import {WelcomePage} from './WelcomePage';
import {getVelocities,deleteVelocities,addVelocities} from '../actions/velocityAction';
import VelocityModal from './auth/VelocityModal';
  




class Velocity extends Component{
    static propTypes={
      getVelocities:PropTypes.func.isRequired,
      velocity:PropTypes.object.isRequired
     // auth :PropTypes .object.isRequired
   // isAuthenticated:PropTypes.bool
    }
//componentDidUpdate(){
  // this.props.getVelocities();
//}

    onDeleteClick =id =>{
      this.props.deleteVelocities(id);
    };
  state={
      isOpen : false
  };

toggle =() => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
  
    render(){
     //const { isAuthenticated} =this.props.auth; 
     const { velocities } =this.props.velocity;   
        return ( 
            
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
             
            
                
            <NavbarBrand href="/">Parameters of experiment</NavbarBrand>
                 
             <Logout/>
           
                  
             
            </Navbar>
             
            
             
            <div className="p-3 bg-secondary my-2 rounded">
    
    <Toast>
          <ToastHeader  ><font size="4">
            Start of the experiment:
            </font></ToastHeader>
          <ToastBody >
           When you press the button ,you will be asked to enter velocities of the wheels of the robot then a link of starting the experiment will appear. So you will see a video to broadcast the experiment.Hope you benefit from our E-lab :)
          </ToastBody>
        </Toast>
        </div> 
     <Container>
     
       <VelocityModal/> 
     </Container>
     
             
       
</div>
);
}}



 
const mapStateToProps = (state )=> ({
  velocity:state.velocity
 // auth:state.auth
  //isAuthenticated:state.auth.isAuthenticated
  });
//export default connect (mapStateToProps ,null)(withRouter(Velocity));
export default connect(mapStateToProps ,{getVelocities,deleteVelocities,addVelocities}) (Velocity);