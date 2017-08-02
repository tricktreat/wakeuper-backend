var router = require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection = require('../db/connection');

router.get('/', function(req, res, next) {
    var args = URL.parse(req.url, true).query;
    connection.query('insert into broadcast(openid,nickname,content,createtime) values($1,$2,$3,$4)', [args.openid, args.nickname, args.content, new Date()], function(err, result) {
        if (err) {
            console.log(err)
            res.status(400).send(err);
        }
        res.send(result);
    })
})

module.exports = router
