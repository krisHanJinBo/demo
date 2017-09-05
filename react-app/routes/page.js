let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
  	console.log(req.query.id)
    let sql=`SELECT * FROM  data  WHERE id=${req.query.id}`;
    db.query(sql,(err,data)=>{    	
    		res.send(data[0])    		
    })   
  });
  
  return router;
};

module.exports=createRouter;