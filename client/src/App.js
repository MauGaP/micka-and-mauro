import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import 'bootstrap/dist/css/bootstrap.min.css';

import {logoutUser, setCurrentUser} from './actions/authActions';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import {ChurchMap} from './components/maps/ChurchMap';
import {PartyMap} from './components/maps/PartyMap';

import './App.css';
import Register from './components/auth/Register';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App header-image'>
            <Route exact path='/' component={Login}/>
            <Switch>
              <PrivateRoute exact path='/register' component={Register}/>
              <PrivateRoute exact path='/dashboard' component={Dashboard}/>
              <PrivateRoute exact path='/dashboard/church' component={ChurchMap}/>
              <PrivateRoute exact path='/dashboard/party' component={PartyMap}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
