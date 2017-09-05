let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
  	if(!req.session['sess_id']){
      res.send({error:1})      
    }else{
    	let sql=`SELECT * FROM user${req.session['sess_id']} WHERE ID="${req.query.id}"`
	    db.query(sql,(err,data)=>{
	    	if(data.length==0) {
	    		res.send({error:1})
			} else {
				let a=data[0].Id;
				console.log(data[0])
				let b=Number(data[0].count)-1;
				if(b<=0){
					b=0
				}
        let sql3=`UPDATE user${req.session['sess_id']} SET count="${b}" WHERE Id="${a}"`
	    		db.query(sql3,(err,data)=>{
	    			res.send({error:0})
	    			console.log("减一了")
	    		})
		    }
	    })
    }
  });    
  return router;
};
module.exports=createRouter;