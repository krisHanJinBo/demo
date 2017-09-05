let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
  	console.log("addItem")
  	console.log("req.id:"+req.query.id)
    let sql=`SELECT * FROM user${req.session['sess_id']} WHERE Id="${req.query.id}"`
	    db.query(sql,(err,data)=>{
	    	if(!err){		    		
	    		if(data.length>0){
	    			console.log("库里有")
	    			console.log("data:"+data)
	    			let a=data[0].Id;
				    let b=Number(data[0].count)+1;
	    			let sql3=`UPDATE user${req.session['sess_id']} SET count="${b}" WHERE Id="${a}"`
		    		db.query(sql3,(err,data)=>{
		    			if(!err){
			    			res.send({error:0})
			    			console.log("更新了")
		    			}
		    		})
	    		}else{
	    			console.log("到达")
	    			let sql2=`INSERT INTO user${req.session['sess_id']}(Id,count,jie,src,price,name) VALUES("${req.query.id}",1,"${req.query.jie}","${req.query.src}","${req.query.price}","${req.query.name}")`
	    			db.query(sql2,(err,data)=>{
	    				if(!err){
	    					console.log("插入了")
	    					res.send({error:0})		    					  
	    				}
	    			})
	    		}
	    	}
	})
  });
    
  return router;
};

module.exports=createRouter;