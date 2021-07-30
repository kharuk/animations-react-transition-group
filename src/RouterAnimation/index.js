import React, {useState} from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from './Home';
import About from './About';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './styles.scss';

function RouterAnimation() {


  return (
    <div className="App">
      <div className="nav">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </div>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default RouterAnimation;