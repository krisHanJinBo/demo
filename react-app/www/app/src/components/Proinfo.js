import React, { Component } from 'react';
import {Link} from 'react-router';
import { message, Button ,Popover } from 'antd';
class Proinfo extends Component {
	constructor(props){
    super(props);
    this.state={
       msg:{}
    }
    this.getData=this.getData.bind(this);
    this.liji=this.liji.bind(this);
    this.getData();
  }
	getData(){		
    let url='http://localhost:3000/proinfo?id='+this.props.params.aid
    fetch(url,{
    	credentials: 'include', //凭证
    	method:'get',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
		}
    }).then((res)=>{
      res.json().then((data)=>{
      	this.setState({
      		msg:data
      	}) 	
      })
    })
  }
	add(msg){	
    let url='http://localhost:3000/addItem?id='+msg.id+"&jie="+msg.jie+"&src="+msg.src+"&price="+msg.price+"&name="+msg.name
    fetch(url,{
    	credentials: 'include', //凭证
    	method:'get',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
		}
    }).then((res)=>{
      res.json().then((data)=>{
         console.log(data) 
         if(data.error==0){
         	 message.success('添加成功');
         }
      })
    })
  }
	liji(){
		this.props.router.replace('/shopcar');
	}
  render() {
  	let msg=this.state.msg
    return (    
    <div>  

    <div className="header">
    <table width="100%"  className="header_nav">
    <tbody>
    	<tr>
        	<td width="10%" className="nav_left1"><a href='javascript:window.history.go(-1)'>返回 </a></td>
            <td width="80%"className="nav_title">产品详情</td>
            <td width="10%" className="nav_r"></td>
        </tr>
    </tbody>
    </table>
    </div>
    <div className="bodymain">
    	<div><img src={"./src/assets/"+msg.src} width="100%" height="auto"/></div>
        <div className="cp">
        	<div className="cp_left">
            	<div>{msg.jie}</div>
            </div>
            <div className="cp_right">${msg.price}</div>
        </div>
		    <div className="Obtn">
            <table width="100%">
              <tbody>
                <tr>
                    <td className="btn1"><input type="button" value="加入购物车" onClick={this.add.bind(this,msg)} className="btn2"/></td>
                    <td className="btn1">
                    <Link to="/shopcar">
                          <input type="button" value="立即购买" onClick={this.liji} className="btn3"/>
                    </Link></td>
                </tr>    
              </tbody>
            </table>
        </div>
        <div className="nr">{msg.name}</div>
        <div className="btnn">
            <table width="100%">
              <tbody> 
                <tr>
                    <td className="bt"><input type="button" value="产品详情" className="b"/></td>
                    <td className="bt"><input type="button" value="产品评价" className="bb"/></td>
                </tr>    
              </tbody>
            </table>
        </div>
     
     <div>
        <div className="pic"><img src="./src/assets/img/big1.jpg" width="100%" height="auto"/></div>
        <div className="pic"><img src="./src/assets/img/big2.jpg" width="100%" height="auto"/></div>
        <div className="pic"><img src="./src/assets/img/big3.jpg" width="100%" height="auto"/></div>
    </div>
    
    <div className="pl">
    		<div className="pll">
        	<div className="pl_1"><h4>name</h4></div> 
            <div className="pl_2">满意：★★★★☆ <span>| time</span></div>
            <div className="pl_3">很好用</div>
            <div className="pl_pic">
            	<table width="100%">
            	  <tbody>
                	<tr>
                    	<td className="pic_x"><img src={"./src/assets/"+msg.src} width="100%" height="auto"/></td>
                        <td className="pic_x"><img src={"./src/assets/"+msg.src} width="100%" height="auto"/></td>
                        <td className="pic_x"><img src={"./src/assets/"+msg.src} width="100%" height="auto"/></td>
                        <td className="pic_x"><img src={"./src/assets/"+msg.src} width="100%" height="auto"/></td>
                    </tr>
                 </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
    <div className="kb"></div>
    </div>  
    );
  }
}

export default Proinfo;