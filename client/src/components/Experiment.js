import React,{Component,Fragment,useState} from 'react';
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
    Alert,
    Card,
    CardBody,
    UncontrolledCollapse,
    CardTitle,
    CardText
  } from 'reactstrap';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  import RegisterModal from './auth/RegisterModal';
  import LoginModal from './auth/LoginModal';
  import Logout from './auth/Logout';
  import {WelcomePage} from './WelcomePage';

  class Experiment extends Component{
    static propTypes={
      isAuthenticated:PropTypes.bool,
     auth :PropTypes .object.isRequired
    }

    toggle =() => {
      this.setState({
        modal:!this.state.modal  
      });
  };

    render(){
      //const [isOpen, setIsOpen] = useState(false);
      const { isAuthenticated} =this.props.auth;
   // const toggle = () => setIsOpen(!isOpen);  
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
             
             
                
            <NavbarBrand href="/">Experiment</NavbarBrand>
              
             <Logout/>
           
             
            </Navbar>
            <Card body>
                <CardTitle>Video broadcast:
                </CardTitle>
                <CardText>

                </CardText>
              </Card>
<Button  color='dark' style={{marginTop:'2rem'}} block id="toggler">Graphs</Button>
<UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
         Will be put here
          </CardBody>
        </Card>
      </UncontrolledCollapse>
<Button  color='dark' style={{marginTop:'2rem'}} block id="toggle">Results</Button>
<UncontrolledCollapse toggler="#toggle">
        <Card>
          <CardBody>
         Will be put here :)
          </CardBody>
        </Card>
      </UncontrolledCollapse>
</div>
);
}}



 
/*const mapStateToProps =state => ({
    auth:state.auth
  });*/
//export default connect (mapStateToProps ,null)(withRouter(Velocity));
//export default (Experiment);
const mapStateToProps = (state )=> ({
  auth:state.auth,
  isAuthenticated:state.auth.isAuthenticated
  });
//export default connect (mapStateToProps ,null)(withRouter(Velocity));
export default connect(mapStateToProps ,null) (withRouter(Experiment));

















