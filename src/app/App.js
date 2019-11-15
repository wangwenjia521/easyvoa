import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import CommonWrapper from '../components/CommonWrapper/view'
import 'whatwg-fetch'
import 'antd/dist/antd.css'
import './style.css'
import './reset.css'
export default  class App extends React.Component{
  render() {
    return (
      <div className="main">
        <Router history={browserHistory} >
        <Route path="/" component ={CommonWrapper}></Route>
      </Router>
      </div>
    
    );
  }
 
}

