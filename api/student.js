'use strict'

var _axios = require('axios');
var config = require('../config.json');
_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
_axios.defaults.withCredentials = true;
var axiosUtils = require('../utils/axios-utils.js');
const iconvLite = require('iconv-lite');

exports.login = function(req, res) {
    var params = {};
    params.zjh = req.param('zjh');
    params.mm = req.param('mm');
    axiosUtils.get("/loginAction.do", params, 1000, function(response) {
        let html = iconvLite.decode(response.data, "gb2312");
        res.send(html);
    }, function(error) {
        res.send(error);
    });
}

exports.queryAllGrade = function(req, res) {
    var params = {};
    params.type = req.param('type');
    params.oper = req.param('oper');
    params.fajhh = req.param('fajhh');
    axiosUtils.get("/gradeLnAllAction.do", params, 1000, function(response) {
        let html = iconvLite.decode(response.data, "gb2312");
        res.send(html);
    }, function(error) {
        res.send(error);;
    });
}