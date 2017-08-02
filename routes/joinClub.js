var router=require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection=require('../db/connection');

router.post('/',function(req,res,next){
	connection.query("insert into joinclub(name,studentid,phone,sex,campus,school,other) values($1,$2,$3,$4,$5,$6,$7)",[req.body.name,req.body.studentid,req.body.phone,req.body.sex,req.body.campus,req.body.school,req.body.other],function(err,result){
		if(err){
			console.log(err)
			res.status(400).send(err);
		}
		res.json(result);
	})
})

module.exports=router