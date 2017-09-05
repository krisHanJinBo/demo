import {Link} from 'react-router';	    
import React, { Component } from 'react';
class L_R extends Component {
  render() {
    return (
      <div>
	      <div className="button" style={{marginTop:100+'px'}}><Link to="/login"><input type="submit" value="登 录" className="text2" /></Link></div>
	      <div className="button"><Link to="/reg"><input type="submit" value="注  册" className="text2" /></Link></div>
	  </div>
    );
  }
}

export default L_R;