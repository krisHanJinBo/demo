let express=require('express');

let createRouter=function (db) {
  let router=express.Router();
  router.get('/',(req,res)=>{
  	if(!req.session['sess_id']){//看有无seesion
      //路由跳转（模拟路由请求）
      res.send({error:1})
      
    }else{
	    let sql=`DELETE FROM user${req.session['sess_id']} WHERE Id="${req.query.id}"`;
	    	db.query(sql,(err,data)=>{
	    		if(err){
	    			res.send({error:1});
	    		}else{
	    			res.send({error:0});
	    		}
	    	})
	  }
	});
  return router;
}
module.exports = createRouter;