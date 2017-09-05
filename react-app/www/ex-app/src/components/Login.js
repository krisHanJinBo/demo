import React, { Component } from 'react';
import {Link} from 'react-router';

class Login extends Component {
	constructor(props){
    super(props);
    this.getData=this.getData.bind(this);  
  }
	getData(){
    let url='http://localhost:3000/login?'+'username='+this.refs.username.value+'&password='+this.refs.password.value
    console.log(this.refs.username.value,this.refs.password.value)
    fetch(url,{
    	credentials: 'include', //凭证
    	method:'get',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
		}	
    }).then((res)=>{
      res.json().then((data)=>{
      	if(data.error==0){
      		  this.props.router.replace('/user');
      	}
      	if(data.error==1){
      		 this.props.router.replace('/user');      		 
      	}
      })
    })
    this.refs.username.value=""
    this.refs.password.value=""
  }
  render() {
    return (    	
    <div>    
    <div className="header">
	    <table width="100%" className="header_nav">
	       <tbody>
	    	<tr>
	        	<td width="10%" className="nav_left1"><a href='javascript:window.history.go(-1)'>返回 </a></td>
	            <td width="80%"className="nav_title">登录</td>
	            <td width="10%" className="nav_r"></td>
	        </tr>
	       </tbody>
	    </table>
	    </div>
    <div className="login">
    	<div className="logo"></div>
        <div className="main">
        	<table width="100%"  className="mainl">
        	 <tbody>
            	<tr>
                	<td className="text"><input type="text/css" className="text1" placeholder="输入用户名" ref="username"/></td>
                </tr>
             </tbody>
            </table>
            <div className="linee"></div>
			<table width="100%"  className="mainl">
			  <tbody>
                <tr>
                    <td className="text"><input type="password" className="text1" placeholder="输入密码" ref="password"/></td>
                </tr>
               </tbody>
            </table>
            <div className="linee"></div>
        </div>
        <div className="button"><a href="javascript:;"><input type="submit" value="登 录" className="text2" onClick={this.getData}/></a></div>
    </div>
    <div className="footrt">
    	<div className="footrt_left"><Link to="/reg">注册新用户</Link></div>
        <div className="footrt_right"><a href="password.html">忘记密码？</a></div>
    </div>
    </div>  
    );
  }
}

export default Login;