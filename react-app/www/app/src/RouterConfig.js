import React, { Component } from 'react';
import {Router,Route,hashHistory,IndexRoute,Link,Redirect,browserHistory} from 'react-router';
import Home from "./components/Home"
import App from "./components/App"
import Prolist from "./components/Prolist"
import Proinfo from "./components/Proinfo"
import Shopcar from "./components/Shopcar"
import User from "./components/User"
import Login from "./components/Login"
import Reg from "./components/Reg"
class RouterConfig extends Component {
  render() {
    return (
       <Router history={hashHistory}>
         <Route path="/" component={App}>
           <IndexRoute component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/prolist" component={Prolist}/>
          <Route path="/proinfo" component={Proinfo}>
              <Route path=":aid" component={Proinfo}/>
          </Route>
          <Route path="/shopcar" component={Shopcar}/>
          <Route path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
         </Route>
       </Router>    
    )
  }
}

export default RouterConfig;