'use strict'

var _axios = require('axios');
var config = require('../config.json');
var axiosUtils = require('../utils/axios-utils.js');
var jsdomUtils = require('../utils/jsdom-utils.js');
var iconvLite = require('iconv-lite');

exports.login = function(req, res) {
    var params = {};
    params.zjh = req.param('zjh');
    params.mm = req.param('mm');
    axiosUtils.get("/loginAction.do", params, 10000, function(response) {
        var html = iconvLite.decode(response.data, "gb2312");
        var msg = jsdomUtils.isLoginSuccess(jsdomUtils.queryDomFromData(html));
        if(null == msg || "" == msg)
        	res.status(200).send(jsdomUtils.returnData(200,{},[],"登录成功"));
        else
          	res.status(401).send(jsdomUtils.returnData(401,{},[],"登录失败:"+msg));
    }, function(error) {
        res.status(401).send(jsdomUtils.returnData(401,{},[],"登录失败"))
    });
}

exports.queryAllGrade = function(req, res) {
    var params = config.cduestc.params;
    axiosUtils.get("/gradeLnAllAction.do", params, 1000, function(response) {
        var html = iconvLite.decode(response.data, "gb2312");
        var listjsdomUtils.queryScoreList(jsdomUtils.queryDomFromData(html));
        res.status(200).send(jsdomUtils.returnData(200,html,list,"成绩查询成功"))
    }, function(error) {
        res.status(500).send(jsdomUtils.returnData(500,{},[],"服务器异常"))
    });
}