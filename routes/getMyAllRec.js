var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	connection.query('select count(*) as num from signin where openid=$1',[args.openid],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err);
		}
		res.send(result);
	})
})

module.exports=router
