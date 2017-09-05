import React, { Component } from 'react';
import Bnav from "./Bnav"
import Bfoot from "./Bfoot"
import 'antd/dist/antd.css';
import Loading from './Loading';
import {connect} from 'react-redux';

class App extends Component {
  render() {
  	let path=this.props.router.location.pathname;
    let {bNav,bFoot,bLoading,showNav,hideNav,showFoot,hideFoot,hideLoading}=this.props;
    if(/home|prolist/.test(path)){
      setTimeout(showNav,0)
      setTimeout(showFoot,0)
    }else if(/user|shopcar/.test(path)){
      setTimeout(hideNav,0);
      setTimeout(showFoot,0);
    }else if(/login|reg|proinfo/.test(path)){
      setTimeout(hideNav,0);
      setTimeout(hideFoot,0);
    }
    return (
    	<div>    	
        <div>
        {bLoading?<Loading/>:null}
        {bNav?<Bnav/>:''}
        {this.props.children}
        {bFoot?<Bfoot/>:''}
      </div>
      </div>  
    );
  }
}

//获取store
const mapStateToProps = (state, ownProps) => {
  return {
    bNav: state.bNav,
    bFoot: state.bFoot,
    bLoading: state.bLoading
  }
};

//转发actins
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    showLoading: () => {
      dispatch({
        type: 'SHOW_LOADING'
      });
    },
    hideLoading: () => {
      dispatch({
        type: 'HIDE_LOADING'
      });
    },
    showNav: () => {
      dispatch({
        type: 'SHOW_NAV'
      });
    },
    hideNav: () => {
      dispatch({
        type: 'HIDE_NAV'
      });
    },
    showFoot: () => {
      dispatch({
        type: 'SHOW_FOOT'
      });
    },
    hideFoot: () => {
      dispatch({
        type: 'HIDE_FOOT'
      });
    },
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);