import React,{Component} from 'react';
import { Badge,Jumbotron,Container,Form, FormGroup, Label, Input  } from 'reactstrap';



class WelcomePage extends Component{
render(){
  return (
    <div>
      <h1>Welcome to our Remote lab<Badge color="primary" primary expand="me">:)</Badge></h1>
      <h> <font size="6"> Brief Description: </font></h>
     <p>Our LAB is for </p>
    </div>
  );
}}

export default WelcomePage;



