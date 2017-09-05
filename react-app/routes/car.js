let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res)=>{
  	if(!req.session['sess_id']){//看有无seesion
      //路由跳转（模拟路由请求）
      res.send({error:1})      
    }else{
	     console.log("car")
	     let sql=`SELECT * FROM user${req.session['sess_id']}`
		    db.query(sql,(err,data)=>{
		    	if(err) {
					res.send({error:1})
				} else {
					if(data.length==0){
						res.send({error:1})
					}else{
						res.send(data)
					}
				}	
	  });
	}
})    
  return router;
};

module.exports=createRouter;