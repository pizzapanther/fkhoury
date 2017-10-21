<SCRIPT LANGUAGE="JavaScript">
<!--

//set image paths
src = ["House/modeling-10/100_0126.jpg", "House/modeling-10/100_0127.jpg", 
	"House/modeling-10/100_0128.jpg", "House/modeling-10/100_0129.jpg",
	"House/modeling-10/100_0130.jpg", "House/modeling-10/100_0131.jpg",
	"House/modeling-10/100_0132.jpg", "House/modeling-10/100_0134.jpg",
	"House/modeling-10/100_0137.jpg", "House/modeling-10/100_0138.jpg",
	"House/modeling-10/100_0139.jpg", "House/modeling-10/100_0141.jpg"]


//set corresponding urls
// url = ["http://freewarejava.com", "http://javascriptkit.com", "http://dynamicdrive.com", "http://www.geocities.com"]

//set duration for each image
duration = 4;

//Please do not edit below
	ads=[]; ct=0;
	function switchAd() {
	var n=(ct+1)%src.length;
	if (ads[n] && (ads[n].complete || ads[n].complete==null)) {
	document["ad_image"].src = ads[ct=n].src;
	}
	ads[n=(ct+1)%src.length] = new Image;
	ads[n].src = src[n];
	setTimeout("switchAd()",duration*1000);
	}
	function doLink(){
	location.href = url[ct];
	} onload = function(){
	if (document.images)
	switchAd();
	}
//-->
</SCRIPT>

<A HREF="javascript:doLink();" onMouseOver="status=url[ct];return true;" onMouseOut="status=''"> 
	<img name="ad_image" src="House/modeling-10/100_0126.jpg" border=0> </img>
</A>
