import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import './index.css';
import App from './App';

const history = createHistory()

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>, 
  </React.StrictMode>,
  document.getElementById('root')
);

