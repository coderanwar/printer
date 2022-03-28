
		function searchResult(searchStr) {
			
			var result = new String;
			
			var any_result = new Boolean (false);
			
			
			//search_moji = z2h_ascii(searchStr);
			search_moji = searchStr;
			
			sanitizer_RE = new RegExp("(\\.|\\?|\\*|\\+|\\^|\\$|\\{|\\}|\\(|\\)|\\[|\\]|\\\\)","g");
			search_moji = search_moji.replace(sanitizer_RE, "\\$1");
			search_RE = new RegExp(search_moji, "gi");
			
			
			result = '<div class="title clearfix">';
			result = result + '<h3>' + resultTitle + '</h3>';
			var resultCount = 0;
			var linkRef;
			var linkHash;
			var linkUrl;
			var linkTitle;
			var linkDesc;
			var resultTopic;
			
			searchStr = encodeStr(searchStr);
			resultTopic = '<dl>';
			
			for (s in contents) {
				
				ici = contents[s].search(search_RE);
				if (ici >= 0) {
					
					any_result = true;
					
					resultCount = resultCount + contents[s].match(search_RE).length;
					
					linkHash = urlHash[s];
					
					linkHash = encodeStr(linkHash);
					
					linkTitle = title[s];
					
					linkDesc = shortdesc[s];
					
					resultTopic = resultTopic + '<dt>';
					
					resultTopic = resultTopic + '<span onClick="resultClick(' + '\'' + linkHash + '\', ' + '\'' + searchStr + '\'' + ')">';
					resultTopic = resultTopic + linkTitle;
					resultTopic = resultTopic + '</span>';
					resultTopic = resultTopic + '</dt>';
					resultTopic = resultTopic + '<dd>';
					resultTopic = resultTopic + linkDesc;
					resultTopic = resultTopic + '</dd>';
				}
			}
			
			if (any_result == false) {
				resultTopic = "<dt></dt><dd>Not found. Please try another keyword.</dd>";
			}
			resultTopic = resultTopic + '</dl>';
			result = result + '<p id="resultAbout">' + resultPrefix + ' ' + resultCount + ' ' + resultSuffix + '</p>';
			result = result + '</div>';
			result = result + '<div id="searchResultNote"><dl><dt></dt><dd>';
			result = result + resultNote;
			result = result + '</dd></dl></div>';
			result = result + '<div>';
			result = result + resultTopic;
			result = result + '</div>';
			
			return result;
		}
		
		function encodeStr(prmStr) {
			var strValue;
			
			strValue = encodeURIComponent(prmStr);
			
			strValue = strValue.replace(/\(/g, "%28");
			strValue = strValue.replace(/\)/g, "%29");
			strValue = strValue.replace(/'/g,  "%27");
			return strValue;
		}
		function z2h_ascii(src) {
			var str = new String;
			var len = src.length;
			for (var i = 0; i < len; i++) {
				var c = src.charCodeAt(i);
				if (c >= 65281 && c <= 65374 && c != 65340) {
					str += String.fromCharCode(c - 65248);
				} else if (c == 8217) {
					str += String.fromCharCode(39);
				} else if (c == 8221) {
					str += String.fromCharCode(34);
				} else if (c == 12288) {
					str += String.fromCharCode(32);
				} else if (c == 65507) {
					str += String.fromCharCode(126);
				} else if (c == 65509) {
					str += String.fromCharCode(92);
				} else {
					str += src.charAt(i);
				} 
			}
			return str;
		}
	