import React, { Component ,button} from 'react';
import {addVelocities} from '../../actions/velocityAction';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,Nav, NavLink,
  Alert
} from 'reactstrap';
import {
  BrowserRouter,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
//import { login } from '../../actions/authActions';
//import { CommitStats } from 'git';
import PropTypes from 'prop-types';
import {clearErrors} from '../../actions/errorActions';
 
class VelocityModal extends Component{
  state={
    modal : false,
   Velocity1:'',
   Velocity2:'',
   Velocity3:'',
   msg:null
   
};
static propTypes = {
  isAuthenticated:PropTypes.bool,
 // auth :PropTypes .object.isRequired,
loading:PropTypes.bool,
  error: PropTypes.object.isRequired,
  clearErrors:PropTypes.func.isRequired,
 velocity:PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps){
    const {error,loading} =this.props;
    if(error !== prevProps.error){
      //check for login error
      if(error.id ==='VELOCITIES_FAIL'){
        this.setState({msg:error.msg.msg});
      }else {
      this.setState({msg:null});
      }
    }
if(this.state.modal){
  //    if authenticated close MODAL
     if(this.props.loading){
        this.toggle();
 }}
  }
 
 
  

toggle=()=>{
  //clear errors
 this.props.clearErrors();
  this.setState({
    modal:!this.state.modal
  });
};
onChange=e=>{
  this.setState({[e.target.name]:e.target.value});
};

onSubmit=e=>{
  e.preventDefault();
  


  const{Velocity1,Velocity2,Velocity3}=this.state;
  const newItem={
    Velocity1,
    Velocity2,
    Velocity3
  };
// attempt to login
this.props.addVelocities(newItem);
  //close modal

 
};
render(){
   // const { velocities } =this.props.velocity; 
 //const { isAuthenticated} =this.props.auth; 
   return(
    <div>
     
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }} 
          onClick = {this.toggle} 
          href="#"
        >
          Enter Velocities
        </Button>
      
    <Modal isOpen={this.state.modal} toggle={this.toggle}>
     <ModalHeader toggle={this.toggle}>Entering Velocities </ModalHeader>
      <ModalBody>
      {this.state.msg ?( <Alert color ="danger">{this.state.msg} </Alert>): null}
       <Form onSubmit ={this.onSubmit}>
        <FormGroup>
        
        <Label for="Velocity1">Velocity1 </Label>
          <Input
            type="Number"
            min={0}
            max ={126}
            name="Velocity1"
            id="Velocity1"
            placeholder="Please enter a value between 0 & 126"
            className='mb-3'
            onChange={this.onChange}
           />
         
           <Label for="Velocity2">Velocity2 </Label>
          <Input
             type="Number"
             min={0}
             max ={126}
             name="Velocity2"
             id="Velocity2"
             placeholder="Please enter a value between 0 & 126"
            className='mb-3'
            onChange={this.onChange}
           />
           <Label for="Velocity3">Velocity3 </Label>
          <Input
             type="Number"
             min={0}
             max ={126}
             name="Velocity3"
             id="Velocity3"
             placeholder="Please enter a value between 0 & 126"
            className='mb-3'
            onChange={this.onChange}
           />
            <Button  color='dark' style={{marginTop:'2rem'}} block > Adding velocities</Button>
           </FormGroup>
       </Form>
      </ModalBody>
    </Modal>
    <p>
    {this.props.loading? <Link to="/Experiment"> Start Experiment </Link>:null}
    </p>
</div>
  );
}}
const mapStateToProps =state =>({
 isAuthenticated:state.auth.isAuthenticated,
 // auth:state.auth,
 velocity:state.velocity,
 loading:state.velocity.loading,
  error:state.error
  });

export default connect(
  mapStateToProps,
  {addVelocities,clearErrors}
)(VelocityModal);
 

