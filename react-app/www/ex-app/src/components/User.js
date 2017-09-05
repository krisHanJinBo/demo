import React, { Component } from 'react';
import {Link} from 'react-router';
import L_R from './L_R';
import UserInfo from './UserInfo';
class User extends Component {
	constructor(props){
    super(props);
    this.state={
       msg:{},
       n:0
    }
    this.getData=this.getData.bind(this);
    this.exit=this.exit.bind(this);
    this.getData();
  }
	
	getData(){
		let url='http://localhost:3000/user'
    fetch(url,{
    	credentials: 'include', //凭证
    	method:'post',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
		}
    }).then((res)=>{
      res.json().then((data)=>{
         if(data.error==1){
            this.setState({
         	  	n:0
         	  }) 
         }else{
         	  this.setState({
         	  	msg:data,
         	  	n:1
         	  })
         	  console.log(this.state.msg)
         }
      })
    })
	}
	exit(){
		let url='http://localhost:3000/exit'
    fetch(url,{
    	credentials: 'include', //凭证
    	method:'post',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
		}
    }).then((res)=>{
      res.json().then((data)=>{
         if(data.error==0){
            this.props.router.replace("/login")
         }
      })
    })
	}
  render() {
  	let n=this.state.n
    return (
      <div className="user">    	
	    <div className="header">
	    <table width="100%"  className="header_nav">
	     <tbody>
	    	<tr>
	        	<td width="10%" className="nav_left1"><a href='javascript:window.history.go(-1)'>返回 </a></td>
	            <td width="80%"className="nav_title">我的中心</td>
	            <td width="10%" className="nav_r"></td>
	        </tr>
	     </tbody>
	    </table>
	    </div>
	    
	    <div className="my">
	    {n?<UserInfo exit={this.exit} msg={this.state.msg}/>:<L_R/>}
	       	
	    </div>
	        
      </div>  
    );
  }
}

export default User;