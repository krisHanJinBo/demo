import React, { Component } from 'react';
import {Link} from 'react-router';
import { Popconfirm, message ,Button ,Input} from 'antd';
import "../assets/css/style.css"
class Shopcar extends Component {
	constructor(){
    super();
    this.state={
       shopcar:[],
       sum:0
    }
    this.getData=this.getData.bind(this);
    
  }
	componentDidMount(){
		console.log("...")
		this.getData();
	}
    cancel() {
      message.error('Click on No');
	  return;
	}
	getData(){
    let url='http://localhost:3000/car';
    fetch(url,{
    	credentials: 'include', //凭证
    	method:'get',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
		}
    }).then((res)=>{
      res.json().then((data)=>{
      	if(data.error==1){
      		alert("请登录")
      	}else{
      		this.setState({
	      		shopcar:data
	      	})
      		let a=0
      		for(var i=0 ;i<this.state.shopcar.length;i++){
      			 a+=(Number(this.state.shopcar[i].count)*Number(this.state.shopcar[i].price))
      		}
      		this.setState({
	      		sum:a
	      	})
	      	console.log(data)
      	}
      	
      })
    })
  }
	jia(id,index){
		let url='http://localhost:3000/jia?id='+id
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
      		let a=this.state.shopcar
      		a[index].count++
      		this.setState({
      			shopcar:a
      		})
            let b=0
      		for(var i=0 ;i<this.state.shopcar.length;i++){
      			 b+=(Number(this.state.shopcar[i].count)*Number(this.state.shopcar[i].price))
      		}
      		this.setState({
	      		sum:b
	      	})
      		message.success('加一了');
      	}
      })
    })
	}
	jian(id,index){
		let url='http://localhost:3000/jian?id='+id
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
      		let a=this.state.shopcar
      		a[index].count--
      		if(a[index].count<=0){
      		  a[index].count=0
      		}
      		this.setState({
      			shopcar:a
      		})
      		let b=0
      		for(var i=0 ;i<this.state.shopcar.length;i++){
      			 b+=(Number(this.state.shopcar[i].count)*Number(this.state.shopcar[i].price))
      		}
      		this.setState({
	      		sum:b
	      	})
      	    console.log(this.state.shopcar)
      		message.success('减一了');
      	}
      })
    })
	}
	del(id,index){
		console.log(id)
		let url='http://localhost:3000/del?id='+id
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
      		let a=this.state.shopcar
      		a.splice(index,1)
      		this.setState({
      			shopcar:a
      		})
      		message.success('删除成功');
      	}
      })
    })
	}
  render() {
    return (
    <div className="shopcar">    	
	    <div className="header">
	    <table width="100%" className="header_nav">
	       <tbody>
	    	<tr>
	        	<td width="10%" className="nav_left1"><a href='javascript:window.history.go(-1)'>返回 </a></td>
	            <td width="80%"className="nav_title">我的购物车</td>
	            <td width="10%" className="nav_r"></td>
	        </tr>
	       </tbody>
	    </table>
	    </div>
	    <div className="bodymain">
	    {
	    	this.state.shopcar.map((val,index)=>{
	    		return (
		    			<div className="bbb" key={val.Id}>
		            <table width="100%" className="shop">
		             <tbody>
		                <tr>
		                    <td className="d2">
		                    <Popconfirm placement="bottom" title="确认删除此商品吗?" onConfirm={this.del.bind(this,val.Id,index)} onCancel={this.cancel} okText="是" cancelText="否">
		                       <b>删除</b>
		                    </Popconfirm>
	        	            </td>
		                   
		                </tr>
		              </tbody>
		            </table>
		            <table width="95%">
		             <tbody>
		                <tr>
		                    <td rowSpan="2"><input type='checkbox'/></td>
		                    <td rowSpan="2" className="shop_pic"><img src={"src/assets/"+val.src} width="100%" height="auto"/></td>
		                    <td className="ddd">{val.jie}</td>
		                </tr>
		                <tr>
		                    <td className="ddd">{val.name}</td>
		                </tr>
		              </tbody>
		            </table>
		            <table width="95%"  className="shop_text">
		               <tbody>
		                <tr>
		                    <td className="d3" width="100">共{val.count}件商品</td>
		                    <td className="d3"><span>￥{val.price}.00元</span> x{val.count}</td>
		                    <Button onClick={this.jia.bind(this,val.Id,index)}>+</Button>
		                    <Button>{val.count}</Button>
		                    <Button onClick={this.jian.bind(this,val.Id,index)}>-</Button>
		                </tr>
		                </tbody>
		            </table>
		    	  </div>	    			
	    		)
	    	})
	    }
	    	
	    </div>
	    <div className="js">
	    <div className="jss"></div>
	    	<table width="100%" >
	    	<tbody>
	        	<tr>
	            	<td className="d3"><input type='checkbox'/>全选</td>
	                <td className="d3" style={{textAlign:'left',paddingLeft:10+'px'}}>合计：<span>￥{this.state.sum}.00</span>（不含运费）</td>
	                <td className="jj"><input type="submit" value="结算" className="jsjs" /></td>
	            </tr>
	        </tbody>
	        </table>
	    </div>
  </div>  
    );
  }
}

export default Shopcar;