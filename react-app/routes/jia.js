let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
  	console.log(req.query.id)
  	if(!req.session['sess_id']){
      res.send({error:1})      
    }else{
    	let sql=`SELECT * FROM user${req.session['sess_id']} WHERE Id="${req.query.id}"`
	    db.query(sql,(err,data)=>{
	    	if(!err){		    		
	    		if(data.length>0){
	    			let a=data[0].Id;
				    let b=Number(data[0].count)+1;
	    			let sql3=`UPDATE user${req.session['sess_id']} SET count="${b}" WHERE Id="${a}"`
		    		db.query(sql3,(err,data)=>{
		    			if(!err){
			    			res.send({error:0})
			    			console.log("加一了")
		    			}else{
		    				res.send({error:1})
		    			}
		    		})
	    		}else{
	    			res.send({error:1}) 
	    		}
	    	}else{
	    		res.send({error:1})
	    	}
	    })
    }
  });
    
  return router;
};

module.exports=createRouter;