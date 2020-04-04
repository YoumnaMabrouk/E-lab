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
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
  } from 'reactstrap';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  import RegisterModal from './auth/RegisterModal';
  import LoginModal from './auth/LoginModal';
  import Logout from './auth/Logout';
  import {WelcomePage} from './WelcomePage';

  class Experiment extends Component{
  
    render(){
        
        return ( 
            
            <div>
                <p>
                <Link to="/" >
                    Home
                  </Link>
                  </p>
                  <Navbar color="dark" dark expand="l" className="mb-5">
             
              <Container>
                
            <NavbarBrand href="/">Experiment</NavbarBrand>
                  <NavItem>
             <Logout/>
            </NavItem>
                  
              </Container>
            </Navbar>
                  
    
   
<Button  color='dark' style={{marginTop:'2rem'}} block>Graphs</Button>
<Button  color='dark' style={{marginTop:'2rem'}} block>Results</Button>
   
</div>
);
}}



 
/*const mapStateToProps =state => ({
    auth:state.auth
  });*/
//export default connect (mapStateToProps ,null)(withRouter(Velocity));
export default (Experiment);


















