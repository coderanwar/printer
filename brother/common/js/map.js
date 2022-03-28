// class要素の変更
//1：Europe
//2：America
//3：Asia

//通常地図：top_map.gif
//America：top_map_usa.gif
function mapAreaOver(id) {
	switch (id) {
		case 1:
			document.getElementById("topmapImg").src = "common/images/top_map_eu.gif";
			break;
		case 2:
			document.getElementById("topmapImg").src = "common/images/top_map_usa.gif";
			break;
		case 3:
			document.getElementById("topmapImg").src = "common/images/top_map_as.gif";
			break;
		case 4:
			document.getElementById("topmapImg").src = "common/images/top_map_afr.gif";
			break;
	}
}

function mapAreaOut(id) {
	document.getElementById("topmapImg").src = "common/images/top_map.gif";
}
