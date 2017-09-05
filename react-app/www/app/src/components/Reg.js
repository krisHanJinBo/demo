import React, { Component } from 'react';
import {Link} from 'react-router';

class Reg extends Component {
	constructor(props){
    super(props);
    this.getData=this.getData.bind(this);  
  }
	getData(){
    let url='http://localhost:3000/reg?'+'username='+this.refs.username.value+'&password='+this.refs.password.value
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
      		  this.props.router.replace('/login');
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
	            <td width="80%"className="nav_title">注册</td>
	            <td width="10%" className="nav_r"></td>
	        </tr>
	       </tbody>
	    </table>
	    </div>
      <div className="login">
    	<div className="logo"></div>
        <div className="main">
        	<table width="100%"  className="main1">
        	<tbody>
            	<tr>
                    <td className="text"><input type="text/css" className="text1" placeholder="输入用户名" ref="username"/></td>
                </tr>
            </tbody>
            </table>
            <div className="linee"></div>
			<table width="100%"  className="main1">
			 <tbody>
                <tr>
                    <td className="text"><input type="text/css" className="text1" placeholder="输入密码" ref="password"/></td>
                </tr>
             </tbody>
            </table>
            <div className="linee"></div>
        </div>
        <div className="button"><input type="submit" value="注 册" className="text2" onClick={this.getData}/></div>
    </div>
    <div className="footrt">
    	<div className="footrt_left"><Link to="/login">已有账号？立即登录</Link></div>
    </div>
    </div>  
    );
  }
}

export default Reg;