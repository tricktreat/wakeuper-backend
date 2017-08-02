var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	connection.query("insert into signin(signtime,openid) values($1,$2)",[new Date(),args.openid],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err)
		}
		res.json(result);
	})
})

module.exports=router