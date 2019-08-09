const jsdom = require("jsdom");
var config = require('../config.json');
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
	var msg = dom.window.document.querySelector(".errorTop strong font");
	if(null == msg || "" == msg)return msg;
	return msg.innerHTML;
}

/**
 * 根据dom解析得到方案成绩list
 */
exports.queryScoreList = function (dom){

	var list = [] , scoreAttribute = config.cduestc.scoreAttribute , rows = dom.window.document.querySelector(".displayTag").rows;
	for (var i = 1; i < rows.length; i++) {
		var item = {};
		for (var j = 0; j < rows[i].cells.length; j++) {
			item[scoreAttribute[rows[0].cells[j].textContent.trim()]] = rows[i].cells[j].textContent.trim();
		}
		list.push(item);
	}
	
	return list;

}

/**
 * 规范会返回数据
 *
 */
exports.returnData = function(status,data,list,msg) {
	var body = {};
	body.status = status;
	body.data = data;
	body.list = list;
	body.msg = msg;
	return body;
}

