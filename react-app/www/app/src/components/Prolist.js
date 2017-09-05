import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
class Prolist extends Component {
	constructor(){
    super();
    this.state={
       prolist:[]
    }
    this.getData=this.getData.bind(this);
    this.getData();
  }
	getData(){
    let url='http://localhost:3000/prolist';
    let _this=this
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
      		prolist:data
      	})
      })
    })
  }
  render() {
    return (
      <div className="Prolist">    	
        <div className="classmain">
    	<table width="95%"  className="class_main">
    	  <tbody>
        	{
        		this.state.prolist.map((val,index)=>{
        			return( 
        	    <tr key={index}>
	        	 <td className="class_main_1">
		        	 <Link to={"/proinfo/"+val.id}>
		                	<div className="class_pic"><img src={"./src/assets/"+val.src} width="60" height="60"/></div>
		                    <div className="class_text">
		                       <p className="jp1">{val.jie}</p>
		                	   <p className="jp2"><i>$</i>{val.price}</p>
		                	</div>
		             </Link>
	              </td>
	            </tr>
	             )
        		
        		})
        	}
              

            <tr height="5"></tr>
            </tbody>
       </table>    
    </div>
      </div>  
    );
  }
}


export default Prolist