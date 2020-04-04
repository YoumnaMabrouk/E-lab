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

  class Velocity extends Component{
  
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
                
            <NavbarBrand href="/">Parameters of experiment</NavbarBrand>
                  <NavItem>
             <Logout/>
            </NavItem>
                  
              </Container>
            </Navbar>
                  
    
   <Form onSubmit ={this.onSubmit}>
    <FormGroup>
    <Label for="Velocity1">Velocity1 </Label>
      <Input
        type="Velocity1"
        name="Velocity1"
        id="Velocity1"
        placeholder="Velocity1"
        className='mb-3'
        onChange={this.onChange}
       />
     
       <Label for="Velocity2">Velocity2 </Label>
      <Input
        type="Velocity2"
        name="Velocity2"
        id="Velocity2"
        placeholder="Velocity2"
        className='mb-3'
        onChange={this.onChange}
       />
      
      <Label for="Velocity3">Velocity3 </Label>
      <Input
        type="Velocity3"
        name="Velocity3"
        id="Velocity3"
        placeholder="Velocity3"
        className='mb-3'
        onChange={this.onChange}
       />
    <Button  color='dark' style={{marginTop:'2rem'}} block href="/Experiment">Start experiments</Button>
   
       
      
       </FormGroup>
   </Form>
</div>
);
}}



 
/*const mapStateToProps =state => ({
    auth:state.auth
  });*/
//export default connect (mapStateToProps ,null)(withRouter(Velocity));
export default (Velocity);