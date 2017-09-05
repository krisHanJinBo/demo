import {Link} from 'react-router';	  	    
import React, { Component } from 'react';
import { Popconfirm, message, Button, Input } from 'antd';
class UserInfo extends Component {
  cancel() {
      message.error('Click on No');
	  return;
	}
  render() {
  	let msg=this.props.msg
    return (
      <div>
	     <table width="100%"  className="my_name">
	               <tbody>
	            	<tr>
	            	    <td className="tx">
	            	       <img src={msg.src} className="toux"/>
	            	    </td>
	                	<td className="my_main_1"><a href="javascript:;">
	                    	  <div><h3>{msg.username}</h3></div>
	                        <div>手机：158 0075 6141  </div></a>
	                  </td>
	                    <td className="my_mainn"><a href="javascript:;">></a></td>
	                </tr>
	                </tbody>
                   
	            </table>
	            <table width="100%"  className="my_2">
	              <tbody>
	            	<tr>
	                	<td width="30" className="my_3"><a href="javascript:;"><img src="./src/assets/img/pj.jpg" width="30%" height="auto"/><p>商家评价</p></a></td>
	                    <td width="30" className="my_4"><a href="javascript:;"><img src="./src/assets/img/xh.jpg" width="30%" height="auto"/><p>我的积分</p></a></td>
	                    <td width="30" className="my_4"><a href="javascript:;"><img src="./src/assets/img/jk.jpg" width="30%" height="auto"/><p>我的金库</p></a></td>
	                </tr>
	              </tbody>
	            </table>
	            <table width="100%"  className="my_n">
	        	 <tbody>
	            	<tr>
	                	<td className="my_main"><a href="javascript:;">我的订单</a></td>
	                    <td className="my_mainn"><a href="javascript:;">></a></td>
	                </tr>
	                <tr>
	                	<td className="my_main_p"><a href="javascript:;">我的购物车</a></td>
	                    <td className="my_mainn_p"><a href="javascript:;">></a></td>
	                </tr>
	               </tbody>
	             </table> 
	             <table width="100%"  className="my_n">
	                <tbody>
					        <tr>
	                	<td className="my_main"><a href="javascript:;">语言</a></td>
	                    <td className="my_mainn"><a href="javascript:;">></a></td>
	                </tr>
	                <tr>
	                	<td className="my_main_p"><a href="javascript:;">修改密码</a></td>
	                    <td className="my_mainn_p"><a href="javascript:;">></a></td>
	                </tr>
	                <tr>
	                	<td className="my_main_p"><a href="javascript:;">服务与广告</a></td>
	                    <td className="my_mainn_p"><a href="javascript:;">></a></td>
	                </tr>
	                <tr>
	                	<td className="my_main_p">推荐给好友</td>
	                    <td className="my_mainn_p">></td>
	                </tr>
	                <tr>
	                	<td className="my_main_p"><a href="javascript:;">最新消息</a></td>
	                    <td className="my_mainn_p"><a href="javascript:;">></a></td>
	                </tr>
	                </tbody>
	            </table>
	            <Popconfirm placement="bottom" title="确认退出吗?" onConfirm={this.props.exit} onCancel={this.cancel} okText="是" cancelText="否">
	                <div className="button1"><input type="submit" value="退出当前账号" className="text2" /></div>
	            </Popconfirm>
	  </div>
    );
  }
}

export default UserInfo;