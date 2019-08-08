'use strict'

var axiosUtils = require('../utils/axios-utils.js');

exports.login = function(req, res) {
    console.log("req.params.zjh : " + req.param('zjh'));
    console.log("req.params.mm : " + req.param('mm'));
    var params = {};
    params.zjh = req.param('zjh');
    params.mm = req.param('mm');
    axiosUtils.get("/loginAction.do", params, 1000, function(response){
    	console.log(response.data);
    }, function(error){
    	console.log(error);
    });
}

