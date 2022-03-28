//********************************************
// jquerySelecterEscape
// parameter : str(string)
// jqueryの予約語をエスケープして返す
//********************************************
function jquerySelecterEscape(str) {
	return str.replace(new RegExp("(#|;|&|,|\\.|\\+|\\*|~|'|:|\"|!|\\^|\\$|\\[|\\]|\\(|\\)|=|>|\\||\\/|\\\\)","g"),"\\$1");
}

//********************************************
// goPageTop
// parameter : none
// ページの先頭へスクロールさせる
//********************************************
function goPageTop() {
	window.scroll(0, 0);
}
//********************************************
// browserCheck
// parameter : none
// ブラウザのバージョンを返す(IE6～10)
//********************************************
function browserCheck() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();
	var browserName;
	if (userAgent.indexOf("msie") > -1) {
		if (appVersion.indexOf("msie 6.") > -1) {
			browserName = 'IE6';
		}
		else if (appVersion.indexOf("msie 7.") > -1) {
			browserName = 'IE7';
		}
		else if (appVersion.indexOf("msie 8.") > -1) {
			browserName = 'IE8';
		}
		else if (appVersion.indexOf("msie 9.") > -1) {
			browserName = 'IE9';
		}
		else if (appVersion.indexOf("msie 10.") > -1) {
			browserName = 'IE10';
		}
		else {
			browserName = 'other';
		}
	}
	else {
		browserName = 'not IE';
	}
	return browserName;
}
window.onload = function ie10(){
	var browserName = browserCheck();
	if (browserName == 'IE10') {
		var ie10 = document.createElement("LINK");
		if (outputFormat == 'HTML') {
			ie10.setAttribute("href", "common/css/ie10.css");
		}
		else if (outputFormat == 'FAQ_Index') {
			ie10.setAttribute("href", "common/css/ie10.css");
		}
		else if (outputFormat == 'FAQ_Topic') {
			ie10.setAttribute("href", "../common/css/ie10.css");
		}
		else {
			ie10.setAttribute("href", "../common/css/ie10.css");
		}
		ie10.setAttribute("rel", "stylesheet");
		ie10.setAttribute("type", "text/css");
		ie10.setAttribute("media", "all");
		document.head.appendChild(ie10);
	}
}