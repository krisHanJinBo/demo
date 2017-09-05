import React, { Component } from 'react';
class Pj extends Component {
  render() {
    return (
      <div>
		<div className="header">		    
	            <table width="100%" className="header_nav">
	              <tbody>
	                <tr>
	                    <td width="10%" className="nav_left1"><a  href='javascript:window.history.go(-1)'><</a></td>
	                    <td width="80%"className="nav_title">商家评价</td>
	                    <td width="10%" className="nav_r"></td>
	                </tr>
	               </tbody>
	            </table>
	        </div>
	    <div className="bodymain">
	    <div className="pl"><!--产品评价-->
	                <div className="pll">
	                <div className="pl_1"><h4>他爱小三</h4></div> 
	                <div className="pl_2">满意：★★★★☆ <span>| 2015-06-12</span></div>
	                <div className="pl_3">中国饭好吃,外国人爱吃也是不争的事实。中国的饮食文化源远流长.</div>
	                <div className="pl_pic">
	                    <table width="100%">
	                      <tbody>
	                        <tr>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                        </tr>
	                       </tbody>
	                    </table>
	                </div>
	            </div>
	            <div className="pll">
	                <div className="pl_1"><h4>他爱小三</h4></div> 
	                <div className="pl_2">满意：★★★★☆ <span>| 2015-06-12</span></div>
	                <div className="pl_3">中国饭好吃,外国人爱吃也是不争的事实。中国的饮食文化源远流长.</div>
	                <div className="pl_pic">
	                    <table width="100%">
	                      <tbody>
	                        <tr>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                            <td className="pic_x"><img src="./src/assets/img/cp.jpg" width="100%" height="auto"/></td>
	                        </tr>
	                      <tbody>
	                    </table>
	                </div>
	            </div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Pj;