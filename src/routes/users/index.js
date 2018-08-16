import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register'
import { isLoggedIn } from '../../helpers/authentication';
import Dashboard from '../dashboard';

class App extends Component {
  render() {
    return (
    
      
      <Switch>
        <Route path="/users/register" component={Register} />
  
        <Route path="/users/login" component={Login} />
        <Route path="" render={
          (props) => {
            if (isLoggedIn()){
              return <Dashboard />
            }
            return <Login />
          }
        }/>
      </Switch>
      
      
    );
  }
}

export default App;
