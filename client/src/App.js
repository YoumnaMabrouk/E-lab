import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';
import './App.css';
import Velocity from './components/Velocity';
import Experiment from './components/Experiment'
import {Provider} from 'react-redux';
import errorPage from './components/errorPage';
import store from './store';
import {loadUser} from './actions/authActions';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory
} from 'react-router-dom';
//import { Router } from "react-router-dom";
//import history from "./utils/history";


class App extends Component {
 
  componentDidMount(){
    store.dispatch(loadUser());
  }
 
 
  render()
  {
    return (
      <>
      <Router>
      <div className="App">
      <Switch>
      <Route exact path="/" component={WelcomePage}/>
      <div className="container">
      <Route  exact  path ="/errorPage" component={errorPage}/>
      <Provider store={store}>       
      <Route  exact  path ="/Velocity" component={Velocity}/>
      </Provider>
      <Provider store={store}>
      <Route  exact path ="/AppNavbar" component={AppNavbar} />
      </Provider>
      <Provider store={store}>       
      <Route  exact  path ="/Experiment" component={Experiment}/>
      </Provider>
      </div>
      </Switch>
      
      </div>
      </Router>
      </>
    );}
 }

export default App;
