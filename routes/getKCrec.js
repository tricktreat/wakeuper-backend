var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	var limit1=new Date(parseInt(args.limit))
	var limit2=new Date(parseInt(args.limit)+60000*50)
	connection.query('select * from kcqd where qdsj>$1 and qdsj<$2 and qddd=$3',[limit1,limit2,args.qddd],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err);
		}
		res.send(result);
	})
})

module.exports=router