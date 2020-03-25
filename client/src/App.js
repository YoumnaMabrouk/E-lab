import React from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';
import './App.css';
import {Provider} from 'react-redux';
import './App.css';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <WelcomePage/>
    </div>
    </Provider>
  );
}

export default App;
