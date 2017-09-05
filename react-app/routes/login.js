let express = require('express');

let createRouter=function(db){
  let router = express.Router();
  router.get('/',(req,res,next)=>{
  	console.log(req.query.username,req.query.password,req.query)
  	let sql = `SELECT * FROM user WHERE username="${req.query.username}"`
		db.query(sql, (err, data) => {
			if(err) {
				res.send("登录时数据库错误")
			} else {
				if(data.length > 0) {
					if(data[0].password == req.query.password) {						
						req.session['sess_id'] = data[0].Id
						res.send({error:0})
						
						let sql=`create table user${req.session['sess_id']}(
										     Id int primary key auto_increment
										    )`;
								  db.query(sql,(err,data)=>{
								    if(!err){
								    	let sql1=`alter table user${req.session['sess_id']} add COLUMN count varchar(30),
								    	add COLUMN jie varchar(30),add COLUMN name varchar(30),add COLUMN price varchar(30),
								    	add COLUMN src varchar(30);`
							    		db.query(sql1,(err,data)=>{
							    			console.log("count")
							    		})
								    }
								  });	
						
					} else {
						res.send({error:1})
					}
				} else {
					res.send({error:1})
			    }
		    }
	})
  });
    
  return router;
};

module.exports=createRouter;