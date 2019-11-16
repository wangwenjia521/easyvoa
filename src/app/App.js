import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
import { View as CommonWrapper } from '../components/CommonWrapper/'
import store from '../store'
import 'whatwg-fetch'
import 'antd/dist/antd.css'
import './style.css'
import './reset.css'
import { Provider } from 'react-redux'
  class App extends React.Component{
  render() {
    return (
      <div className="main">
       <Provider store={store} >
            <Router history={browserHistory} >
              <Route path="/" component ={CommonWrapper}></Route>
          </Router>
        </Provider>
      </div>
        
    )
  }
}
export default App

