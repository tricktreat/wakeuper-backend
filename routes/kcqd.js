var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.get('/',function(req,res,next){
	var args = URL.parse(req.url, true).query;
	connection.query("insert into kcqd(openid,xm,xh,bj,kcmc,kcdm,qddd,qdsj) values($1,$2,$3,$4,$5,$6,$7,$8)",[args.openid,args.xm,args.xh,args.bj,args.kcmc,args.kcdm,args.qddd,new Date()],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err);
		}
		res.json(result);
	})
})

module.exports=router