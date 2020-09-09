//sp URL Change (direct logon/PCSP)
jquery_spurl();
function jquery_spurl(){
	//direct logon
	$('a[href*="https://ib.sevenbank.co.jp"] , area[href*="https://ib.sevenbank.co.jp"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace(/ib/g,"mb");
		datS = datS.replace(/IB/g,"SB");
		$(this).attr("href",datS);
	});

	//PCSP
	$('a[href*="/personal/support/"] , area[href*="/personal/support/"] , a[href*="/personal/merit/"] , area[href*="/personal/merit/"] , a[href*="/personal/guide/"] , area[href*="/personal/guide/"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/personal/","/sp/personal/");
		$(this).attr("href",datS);
	});

	$('a[href*="/oos/adv/girlscard/"] , area[href*="/oos/adv/girlscard/"] , a[href*="/oos/adv/intlcard/"] , area[href*="/oos/adv/intlcard/"] , a[href*="/oos/adv/tmp_10.html"] , area[href*="/oos/adv/tmp_10.html"] , a[href*="/oos/adv/tmp_39.html"] , area[href*="/oos/adv/tmp_39.html"] , a[href*="/oos/adv/tmp_56.html"] , area[href*="/oos/adv/tmp_56.html"] , a[href*="/oos/adv/tmp_60.html"] , area[href*="/oos/adv/tmp_60.html"] , a[href*="/oos/adv/tmp_95.html"] , area[href*="/oos/adv/tmp_95.html"] , a[href*="/oos/adv/tmp_103.html"] , area[href*="/oos/adv/tmp_103.html"] , a[href*="/oos/adv/tmp_108.html"] , area[href*="/oos/adv/tmp_108.html"] , a[href*="/oos/adv/tmp_112.html"] , area[href*="/oos/adv/tmp_112.html"] , a[href*="/oos/adv/tmp_113.html"] , area[href*="/oos/adv/tmp_113.html"] , a[href*="/oos/adv/tmp_114.html"] , area[href*="/oos/adv/tmp_114.html"] , a[href*="/oos/adv/tmp_117.html"] , area[href*="/oos/adv/tmp_117.html"], a[href*="/oos/adv/tmp_119.html"] , area[href*="/oos/adv/tmp_119.html"] , a[href*="/oos/adv/tmp_120.html"] , area[href*="/oos/adv/tmp_120.html"] , a[href*="/oos/adv/tmp_126.html"] , area[href*="/oos/adv/tmp_126.html"] , a[href*="/oos/adv/tmp_128.html"] , area[href*="/oos/adv/tmp_128.html"], a[href*="/oos/adv/tmp_138.html"] , area[href*="/oos/adv/tmp_138.html"], a[href*="/oos/adv/tmp_139.html"] , area[href*="/oos/adv/tmp_139.html"] , a[href*="/oos/adv/tmp_141.html"] , area[href*="/oos/adv/tmp_141.html"] , a[href*="/oos/adv/tmp_142.html"] , area[href*="/oos/adv/tmp_142.html"], a[href*="/oos/adv/tmp_143.html"] , area[href*="/oos/adv/tmp_143.html"], a[href*="/oos/adv/tmp_144.html"] , area[href*="/oos/adv/tmp_144.html"], a[href*="/oos/adv/tmp_147.html"] , area[href*="/oos/adv/tmp_147.html"], a[href*="/oos/adv/tmp_160.html"] , area[href*="/oos/adv/tmp_160.html"], a[href*="/oos/adv/tmp_166.html"] , area[href*="/oos/adv/tmp_166.html"], a[href*="/oos/adv/tmp_169.html"] , area[href*="/oos/adv/tmp_169.html"], a[href*="/oos/adv/tmp_170.html"] , area[href*="/oos/adv/tmp_170.html"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/oos/adv/","/sp/per/cam/");
		$(this).attr("href",datS);
	});

	$('a[href*="/english/oos/adv/tmp_142.html"] , area[href*="/english/oos/adv/tmp_142.html"] , a[href*="/english/oos/adv/tmp_160.html"] , area[href*="/english/oos/adv/tmp_160.html"] , a[href*="/english/oos/adv/tmp_169.html"] , area[href*="/english/oos/adv/tmp_169.html"] , a[href*="/english/oos/adv/tmp_170.html"] , area[href*="/english/oos/adv/tmp_170.html"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/english/oos/adv/","/english/sp/per/cam/");
		$(this).attr("href",datS);
	});

	//PCSP topbanner
	//$('a[href*="/cp/count_topbanner000.html"] , area[href*="/cp/count_topbanner000.html"]').each(function(){
		//var datS = $(this).attr("href");
		//datS = datS.replace("/cp/","/cp/sp/");
		//$(this).attr("href",datS);
	//});

	/*//PCSP topbanner (english)
	$('a[href*="/english/cp/count_topbanner000en.html"] , area[href*="/english/cp/count_topbanner000en.html"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/english/cp/","/english/cp/sp/");
		$(this).attr("href",datS);
	});*/

	//PCSP sidebanner
	$('a[href*="/cp/count_sidebanner002.html"] , area[href*="/cp/count_sidebanner002.html"],a[href*="/cp/count_sidebanner005.html"] , area[href*="/cp/count_sidebanner005.html"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/cp/","/cp/sp/");
		$(this).attr("href",datS);
	});

		//PCSP topbtn
	$('a[href*="/cp/count_topbtn_001.html"] , area[href*="/cp/count_topbtn_001.html"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/cp/","/cp/sp/");
		$(this).attr("href",datS);
	});






	//end set
	escapeTOPSP();
}

function escapeTOPSP(){
	//spset
	$('a[href*="/sp/sp/"] , area[href*="/sp/sp/"]').each(function(){
		var datS = $(this).attr("href");
		datS = datS.replace("/sp/sp/","/sp/");
		datS = datS.replace("/sp/sp/","/sp/");
		$(this).attr("href",datS);
	});
}
