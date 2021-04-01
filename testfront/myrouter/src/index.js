import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link, Switch, BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import User from './User';
import Visit from './Visit';


const routing = (
  <Router>
    <Route exact path="/" component ={App}  />
    <Route path="/user" component ={User}  />
    <Route path="/visit" component ={Visit}  />

  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

