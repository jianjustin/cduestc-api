'use strict'

var _axios = require('axios');
var config = require('../config.json');
_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



exports.get = function(url, params, timeout, successfn, errorfn) {
    _axios.get(url, {
    		baseURL: config.cduestc.url,
    		method: 'GET'
            params: params,
            timeout: timeout
        })
        .then(successfn)
        .catch(errorfn);
}

exports.post = function(url, params,data,timeout, successfn, errorfn) {
    _axios.get(url, {
    		baseURL: config.cduestc.url,
    		method: 'POST'
            params: params,
            data: data,
            timeout: timeout
        })
        .then(successfn)
        .catch(errorfn);
}