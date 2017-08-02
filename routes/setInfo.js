var router = require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection = require('../db/connection');

router.post('/', function(req, res, next) {
    if (req.body.birthday) {
        connection.query("update users set name=$2,phone=$3,campus=$4,birthday=$5,studentid=$6,pwd=$7,motto=$8,school=$9 where openid=$1", [req.body.openid, req.body.name, req.body.phone, req.body.campus, new Date(req.body.birthday), req.body.studentid, req.body.pwd, req.body.motto, req.body.school], function(err, result) {
            if (err) {
                res.status(400).send(err);
                console.log(err)
            }
            res.json(result);
        });
    } else {
        connection.query("update users set name=$2,phone=$3,campus=$4,studentid=$5,pwd=$6,motto=$7,school=$8 where openid=$1", [req.body.openid, req.body.name, req.body.phone, req.body.campus, req.body.studentid, req.body.pwd, req.body.motto, req.body.school], function(err, result) {
            if (err) {
                res.status(400).send(err);
                console.log(err)
            }
            res.json(result);
        });
    }
})

module.exports = router