const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.queryDomFromData = function (data) {
	const dom = new JSDOM(data);
	return dom;
}

/**
 * 根据dom解析获取登录是否成功
 *
 */
exports.isLoginSuccess = function (dom){
	var msg = dom.window.document.querySelector(".errorTop strong font").innerHTML;
	return msg;
}

/**
 * 根据dom解析得到方案成绩list
 */
exports.queryScoreList = function (dom){
	var list = [];
	return list;

}

exports.returnData = function(status,data,list,msg) {
	var body = {};
	body.status = status;
	body.data = data;
	body.list = list;
	body.msg = msg;
	return body;
}

