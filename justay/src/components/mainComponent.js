import React, { Component } from "react";
import Contact from './contactComp';
import Home from './homeComp';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './aboutComp';
import { TransitionGroup } from 'react-transition-group';

class Main extends Component {

  render() {
    return (
      <div className="App">
        <TransitionGroup>
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/contactus" component={Contact}  />
              <Route exact path="/aboutus" component={About}/>
              <Redirect to="/home" />
            </Switch>
        </TransitionGroup>
      </div>
    );
  }
}
export default Main;

