var router = require('express').Router();
var qs = require('querystring');
var URL = require('url');
var connection = require('../db/connection');
var WXBizDataCrypt = require('../utils/WXBizDataCrypt')

router.get('/', function(req, res, next) {
    var appId = 'wxce0af3f23f9eee19'
    var args = URL.parse(req.url, true).query;
    var pc = new WXBizDataCrypt(appId, args.sessionkey)
    var data = pc.decryptData(args.encryptedData, args.iv)
    res.send(data)

})

module.exports = router