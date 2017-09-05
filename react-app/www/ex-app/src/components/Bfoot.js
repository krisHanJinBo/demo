import React, { Component } from 'react';
import {Link} from 'react-router';
class Bfoot extends Component {
  render() {
    return (
      <div className="Bfoot">
		<table width="100%" className="nav">
			<tbody>
		    	<tr>
		        	  <td width="30" className="foot"><Link to="/home"  activeClassName="active"><p width="30%" height="auto"><i className="iconfont">&#xe64f;</i></p><p>首页</p></Link></td>
		            <td width="30" className="foot"><Link to="/prolist" activeClassName="active"><p width="30%" height="auto"><i className="iconfont">&#xe655;</i></p><p>分类</p></Link></td>
		            <td width="30" className="foot"><Link to="/shopcar"  activeClassName="active"><p width="30%" height="auto"><i className="iconfont">&#xe63f;</i></p><p>购物车</p></Link></td>
		            <td width="30" className="foot"><Link to="/user"  activeClassName="active"><p width="30%" height="auto"><i className="iconfont">&#xe659;</i></p><p>我的</p></Link></td>
		       </tr> 
		  </tbody>
	  </table>
	    <div className="kb"></div>
      </div>
    );
  }
}

export default Bfoot;