import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';


class Home extends Component {
	componentDidMount(){
    this.props.router.replace('/home');
  }
  render() {
    return (
      <div className="Home">
	    <div style={{marginTop:40+'px'}} className="home1">
	      <ReactSwipe  swipeOptions={{continuous:true,auto:2000,disableScroll:true}}>
	        <img src="./src/assets/img/b1.jpg" width="100%" height="250"/>
	        <img src="./src/assets/img/b2.jpg" width="100%" height="250"/>
	        <img src="./src/assets/img/b3.jpg" width="100%" height="250"/>
	       </ReactSwipe>
	    </div>
	    <div className="xx">
	    	<div className="xx_1"><img src="./src/assets/img/ts.png" width="40%" height="auto"/></div>
	        <div className="xx_2">美丽说10周年店庆---嗨购!!!</div>
	    </div>
	    
	    <div className="indexmain">
	        <table width="100%" className="indexmain_1">
	           <tbody>
	        	<tr>
	            	<td className="main_1"><a href="javascript:;">
	                	<div className="main_2"><img src="./src/assets/img/im1.jpg" width="100%" height="auto"/></div>
	                    <div className="indetext">百货馆</div></a>
	                </td>
	                <td className="main_1"><a href="javascript:;">
	                	<div className="main_2"><img src="./src/assets/img/im2.jpg" width="100%" height="auto"/></div>
	                    <div className="indetext">母婴馆</div></a>
	                </td>
	                <td className="main_1"><a href="javascript:;">
	                	<div className="main_2"><img src="./src/assets/img/im3.jpg" width="100%" height="auto"/></div>
	                    <div className="indetext">美妆馆</div></a>
	                </td>
	            </tr>
	            </tbody>
	        </table>
	        <table width="100%"  className="indexmain_1">
	        	<tbody>
	        	<tr>
	            	<td className="main_1"><a href="javascript:;">
	                	<div className="main_2"><img src="./src/assets/img/im4.jpg" width="100%" height="auto"/></div>
	                    <div className="indetext">新品秒杀</div></a>
	                </td>
	                <td className="main_1">
	                  <a href="javascript:;">
	                	<div className="main_2">
	                	<img src="./src/assets/img/im5.jpg" width="100%" height="auto"/>
	                	<div className="indetext">9.9包邮</div>
	                	<img src="./src/assets/img/im7.jpg" width="100%" height="auto"/>
	                	<div className="indetext">爆款必抢</div>
	                	</div>
	                  </a>
	                 
	                    
	                </td>
	                <td className="main_1"><a href="javascript:;">
	                	<div className="main_2"><img src="./src/assets/img/im6.jpg" width="100%" height="auto"/></div>
	                    <div className="indetext">首购自营</div></a>
	                </td>
	            </tr>
	            </tbody>
	        </table>
	    </div>
	    
	    <div id="activity">
	    	<div className="title">优惠中心</div>	
	    	<img src="./src/assets/img/u1-1.jpg" className="im"/>
	    	<img src="./src/assets/img/u1-10.jpg" className="im"/>
	    	<img src="./src/assets/img/u1-7.jpg" className="im"/>
	    	<img src="./src/assets/img/u1-5.jpg" className="im"/>
	    	<img src="./src/assets/img/u1-3.jpg" className="im"/>
	    	<img src="./src/assets/img/u1-9.jpg" className="im"/>
	    	<img src="./src/assets/img/lb4.jpg" width="100%" height="60"/>
	        <div className="content">
	                
	        </div>
	    </div>
      </div>
    );
  }
}

export default Home;