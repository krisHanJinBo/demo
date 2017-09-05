let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
    if(!req.session['sess_id']){//看有无seesion
      //路由跳转（模拟路由请求）
      res.send({error:1})     
    }else{
    	let sql=`SELECT * FROM user${req.session['sess_id']} WHERE ID="${req.query.id}"`
    	db.query(sql,(err,data)=>{
    		if(data.length>0){
    			res.send(data[0])
    		}
    	})
	}  
  });
  
  return router;
};

module.exports=createRouter;