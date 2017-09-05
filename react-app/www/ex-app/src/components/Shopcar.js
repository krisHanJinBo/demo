import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Popconfirm, message, Button, Input } from 'antd';
import "../assets/css/style.css"
class Shopcar extends Component {
	cancel() {
      message.error('Click on No');
	  return;
	}
	jia(data){
		this.props.additem(data)
		message.success("+1")
	}
	jian(data){
		this.props.removeitem(data)
		message.success("-1")
	}
	del(data){
		this.props.deleteitem(data)
		message.success("删除成功")
	}
	render() {
		let shopcar = this.props.buycar
		let sum=0
		shopcar.map((val,index)=>{
			sum+=Number(shopcar[index].number)*Number(shopcar[index].price)
		})
		console.log(shopcar)
		return(
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
	    	shopcar.map((val,index)=>{
	    		return (
		    			<div className="bbb" key={val.id}>
		            <table width="100%" className="shop">
		             <tbody>
		                <tr>
		                    <td className="d2">
		                    <Popconfirm placement="bottom" title="确认删除此商品吗?" onConfirm={this.del.bind(this,val)} onCancel={this.cancel} okText="是" cancelText="否">
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
		                    <td rowSpan="2" className="shop_pic"><img src={"./src/assets/"+val.src} width="100%" height="auto"/></td>
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
		                    <td className="d3"><span>￥{val.price}.00元</span> x{val.number}</td>
		                    <Button onClick={this.jia.bind(this,val)}>+</Button>
		                    <Button>{val.number}</Button>
		                    <Button onClick={this.jian.bind(this,val)}>-</Button>
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
	                <td className="d3" style={{textAlign:'left',paddingLeft:10+'px'}}>合计：<span>￥{sum}.00</span>（不含运费）</td>
	                <td className="jj"><input type="submit" value="结算" className="jsjs" /></td>
	            </tr>
	        </tbody>
	        </table>
	    </div>
  </div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		buycar: state.buycar
	}
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
       additem : (data) => {
    	dispatch({
    		type:"ADD_ITEM",
    		payload:data
    	})
       },
       deleteitem : (data) => {
    	dispatch({
    		type:"DELETE_ITEM",
    		payload:data
    	})
       },
       removeitem : (data) => {
    	dispatch({
    		type:"REMOVE_ITEM",
    		payload:data
    	})
       },
       deleteall : (data) => {
    	dispatch({
    		type:"DELETEALL_ALL",
    		payload:data
    	})
       }
       
	}
};
//容器组件 ->链接-> counter组件
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Shopcar);