var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/allBroadcast',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	connection.query('select * from broadcast order by createtime desc limit $1',[args.n],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err);
		}
		res.send(result);
	})
})

router.get('/userBroadcast',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	connection.query('select * from broadcast where openid=$1',[args.openid],function(err,result){
		if(err){
			res.send(err);
		}
		res.send(result);
	})
})

module.exports=router
