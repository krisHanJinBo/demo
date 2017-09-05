import React, { Component } from 'react';
class Bnav extends Component {
  render() {
    return (
      <div className="Bnav">
	      <div className="header">
	      <table width="100%"  className="header_nav">
	      <tbody>
	    	<tr>
	        	<td className="nav_left">
	            <select className="nav_op">
	            	<option className="nav_tion">青岛</option>
	                <option className="nav_tion">北京</option>
	                <option className="nav_tion">上海</option>
	                <option className="nav_tion">广州</option>
	                <option className="nav_tion">天津</option>
	                <option className="nav_tion">沈阳</option>
	                <option className="nav_tion">大连</option>
	                <option className="nav_tion">重庆</option>
	                <option className="nav_tion">西安</option>
	                <option className="nav_tion">成都</option>
	                <option className="nav_tion">燕郊</option>
	                <option className="nav_tion">延边</option>
	                <option className="nav_tion">烟台</option>
	                <option className="nav_tion">威海</option>
	            </select>
	            </td>
	            <td ></td>
	            <td className="nav_right"><input type="text" placeholder="输入关键词搜索商品" className="searc"/>
	            </td>
	            <td className="nav_ss"><input type="submit"  value="搜索" className="sss"/></td>
	        </tr>
	        </tbody>
	      </table>
	    </div>
      </div>
    );
  }
}

export default Bnav;