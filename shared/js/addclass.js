/*------------------------------------------------------------------------------------------------
creation date 2009.8.21
http://www.sevenbank.co.jp/
Copyright (C) Seven Bank,Ltd. All Rights Reserved.
------------------------------------------------------------------------------------------------*/
$(function() {
/*------------------------------
:last-child
------------------------------*/
var lastchild = [
		"div#main dl.bnr dd ul li:last-child",								 
		"div#header div.guide dl dd.menu ul li:last-child",
		"div#main div.topics dl dd dl dd:last-child",
		"div#main div.sNav div.category div.service div.box dl:last-child",
		"div#footer dl dd ul.assist li:last-child",
		"div#footer dl dd ul.assist02 li:last-child",
		"div#main div.pause ul li:last-child",
		"div#sub div.localNav ul.localNavH li ul li:last-child",
		"div#sub div.localNav ul.localNavH li ul li ul li:last-child",
		"div#sub div.localNav ul.localNavCSR li ul li:last-child",
		"div#sub div.localNav ul.localNavCSR li ul li ul li:last-child"
		];

for(i=0; i<lastchild.length; i++){
$($(lastchild)[i]).addClass('lastChild'); 
}


/*------------------------------
:first-child
------------------------------*/
var firstchild = [
		"div#header div.guide dl dd.menu ul li:first-child",
		"div#main dl.warning dd ul:first-child",
		"table.newsRelease td p:first-child"
		];

for(i=0; i<firstchild.length; i++){
$($(firstchild)[i]).addClass('firstChild'); 
}


});
