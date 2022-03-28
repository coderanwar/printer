
		bannerText = new Array();
		bannerText[0]='You can view and download latest User\'s Guides, driver updates and FAQs and helpful product solutions.';
		bannerText[1]='Choose genuine Brother supplies and accessories to maintain genuine Brother quality.';
		bannerText[2]='Your free one-stop resource center for creative projects';
		bannerText[3]='By taking just a few minutes to register, you can enjoy quicker service and more efficient support.';
		bannerText[4]='';
		function chgText(objId,IDnum) {
			if (document.getElementById(objId)!=null){
			document.getElementById(objId).innerHTML = bannerText[IDnum];
			//document.getElementById(objId).style.display = 'block';
			document.getElementById(objId).style.visibility='visible';
			document.getElementById(objId).style.color='#000';
			}
		}
		function noneText(objId){
			if (document.getElementById(objId)!=null){
			//document.getElementById(objId).style.display = 'none';
			//displayで処理すると、領域がなくなるのでフッターがカクカクシカジカ動くので…
			//document.getElementById(objId).style.color='#fff';
			document.getElementById(objId).style.visibility='hidden';
			}
		}
	