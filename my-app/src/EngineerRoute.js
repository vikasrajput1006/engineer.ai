import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

/******************** Common Routing ****************************/

import App from './App';
import AstroidDetail from './AstroidDetail';

class EngineerRoute extends Component {  

  render() {
    return (
      <Switch>      
        <Route exact path="/" component={App} /> 
        <Route exact path="/astroidDetail" component={AstroidDetail} />              
      </Switch>
    );
  }
}
export default EngineerRoute;
