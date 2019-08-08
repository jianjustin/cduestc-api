'use strict'

var axiosUtils = require('../utils/axios-utils.js');
const iconvLite = require('iconv-lite');

exports.login = function(req, res) {
    var params = {};
    params.zjh = req.param('zjh');
    params.mm = req.param('mm');
    axiosUtils.get("/loginAction.do", params, 1000, function(response){
    	let html = iconvLite.decode(response.data, "gb2312");
    	console.log(html);
    }, function(error){
    	console.log(error);
    });
}

