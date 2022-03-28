searchWordHighlighting();

function searchWordHighlighting()
{
	var fontName    = "";
	var fontColor   = "";
	var fontSize    = 0;
	var isBold      = 0;
	var isItalic    = 0;
	var isUnderline = 0;
	var backColor   = "#FFFF00";


	if (document.body.createTextRange)
	{

		var range = document.body.createTextRange();
		var searchStr = sermoji()

		if (searchStr == "") return;

		range.collapse(true);
		pfrag="false";

		while (range.findText(searchStr))
		{
			if (fontName != "") range.execCommand("fontName", true, fontName);
			if (fontSize > 0) range.execCommand("fontSize", true, fontSize);
			if (fontColor != "") range.execCommand("foreColor", true, fontColor);
			if (isBold != 0) range.execCommand("bold");
			if (isItalic != 0) range.execCommand("italic");
			if (isUnderline != 0) range.execCommand("underline");
			if (backColor != "") range.execCommand("backColor", false, backColor);


			if (pfrag == "false" )
			{
				range.select();
				//--追加 100726
				var offset = 0;
				var current = range.parentElement();
				
			
				while(1)
				{
					offset = offset + current.offsetTop;
					current = current.offsetParent;
					if(current == null) break;
				}

				window.scrollTo(0, offset);
				//追加 100726--
				pfrag="true";
			}
			range.collapse(false);

		}

	}
	else
	{

		var searchStr = sermoji();
		pfrag="false";

		if (searchStr == "") return;


		//検索文字ハイライト処理
		rObj = new RegExp(searchStr,"ig");

		for( var i=0; i<document.body.innerHTML.match(rObj).length; ++i ) 
		{
			var reg = new RegExp( document.body.innerHTML.match(rObj)[i],'g');

			document.body.innerHTML=document.body.innerHTML.replace(reg, '<span color="black" style="background-color:' + backColor + '">'+document.body.innerHTML.match(rObj)[i]+'</span>' );

		}


		if (pfrag == "false" )
		{

			var isFF36up = false;


			//Firefoxのバージョンチェック
			if (navigator.userAgent) 
			{
			  var ffver = navigator.userAgent.match(/Firefox\/3\.(\d+)/);
			  isFF36up = ffver && parseInt(ffver[1], 10) >= 6;
			}

			var nsResolver = 
			{
				lookupNamespaceURI:function (prefix) 
				{
					if (isFF36up && prefix == "ns") 
					{
						return "http://www.w3.org/1999/xhtml";
					}
					else
					{
						return "";
					}
				}
			};


			var xPathExpression;
			var xpath_result;

			//Firefox3.6系だった場合
			if(isFF36up == true)
			{
				xPathExpression = "//ns:span[@style = 'background-color: rgb(255, 255, 0);']"
				xpath_result = document.evaluate( xPathExpression, document, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE , null );
			}
			//Firefox3.6以上だった場合
			else
			{
				xPathExpression = "//span[@style='background-color:" + backColor + "']"
				xpath_result = document.evaluate( xPathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE , null );
			}

			//検索文字一つ目の場所はスクロールする処理
			var str = xpath_result.singleNodeValue.offsetTop;
			window.scrollTo(0, str);
			window.getSelection().selectAllChildren(xpath_result.singleNodeValue); 

 			pfrag="true";

		}

	}

}



function getSearchStr()
{
	var urlStr = "" + window.location;
	var baseStr = "mySearch=";
	var index = urlStr.indexOf(baseStr);
	if (index == -1) return "";
	return decodeURIComponent(urlStr.substring(index + baseStr.length));
}

function sermoji(){
 var sertxt="";
 var url0=location.href;
 var a=url0.indexOf("?");
 var sertxt;
 var sertxt0="";
 var kno;
 var serno;
	if ( a >= 0 ) { 
  		d1=url0.substr(a+1);
		a=d1.indexOf("=");
		if ( a >=0 ) {
			   sertxt=d1.substr(a+1);
		}
	}
             serno=sertxt.indexOf("_");
             sertxt0="";
             while( serno>0){
                 kno=sertxt.substr(0,serno);
                 sertxt0=sertxt0+String.fromCharCode(kno);
                 sertxt=sertxt.substr(serno+1);
                 serno=sertxt.indexOf("_");
             }
              return sertxt0;
}
