'use strict'

var _axios = require('axios');
var config = require('../config.json');
_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf8';
_axios.defaults.withCredentials = true;

const tough = require('tough-cookie');
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
axiosCookieJarSupport(_axios);
const cookieJar = new tough.CookieJar(); 


exports.get = function(url, params, timeout, successfn, errorfn) {
    _axios.get(url, {
            baseURL: config.cduestc.url,
            method: 'GET',
            params: params,
            jar: cookieJar,
            responseType: "arraybuffer",
            timeout: timeout
        })
        .then(successfn)
        .catch(errorfn);
}

exports.post = function(url, params, data, timeout, successfn, errorfn) {
    _axios.get(url, {
            baseURL: config.cduestc.url,
            method: 'POST',
            params: params,
            jar: cookieJar,
            data: data,
            responseType: "arraybuffer",
            timeout: timeout
        })
        .then(successfn)
        .catch(errorfn);
}