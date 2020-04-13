import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';
import './App.css';
import Velocity from './components/Velocity';
import Experiment from './components/Experiment'
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import errorPage from './components/errorPage';
import store from './store';
import {loadUser} from './actions/authActions';
import AuthRoute from './components/auth/AuthRoute';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory
} from 'react-router-dom';
import axios from 'axios';
//import { AUTH_THE_USER } from './actions/types';
//import RequireAuth from './components/auth/require_auth';
//import { Router } from "react-router-dom";
//import history from "./utils/history";

//const store = createStore();
class App extends Component {
  
 
  componentDidMount(){
    store.dispatch(loadUser());
  }
  
 //chechLoginStatus(){
  // axios.get("http:/localhost:3000/logged_in")
 //}
  render()
  {
  
//const token = localStorage.getItem('token');
//if (token) {
  //  store.dispatch({ type: AUTH_THE_USER });}
    return (
      <Provider store={store}>
      <>
      <Router  >
      <div className="container">
      <Switch>
      <Route exact path="/" component={WelcomePage} />
    
  
      <Route  exact  path ="/errorPage" component={errorPage}/ >
         
      <Route  exact  path ="/Velocity" component={Velocity}/>
    
 
      <Route exact path ="/AppNavbar" component={AppNavbar} / >
      
            
      <Route exact  path ="/Experiment" component={Experiment}/>
      
     
      
      </Switch>
      
      </div>
      </Router>
      </>
      </Provider>
    );}
 }

export default App;
