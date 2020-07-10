// 一括抜き出しJS

function tool_extraction(){

/* ---------------------------------------------
画面初期化
--------------------------------------------- */
//allClear();
toolClearSub();


/* ---------------------------------------------
ツールバー表示
--------------------------------------------- */
var h = jQuery('#debagBarMain').outerHeight();
var s = 'bottom:'+ h +'px';

var div = document.createElement('div');
div.setAttribute('id','debagBarSub');
div.setAttribute('style', s);
document.body.appendChild(div);
var div = document.getElementById('debagBarSub');
var bar = document.createElement('div');
bar.setAttribute('id','debagBarSubMain');
bar.innerHTML = '\
<form name="debagFormSub">\
<ul>\
	<li><label><input type="radio" onclick="ex_alt();" name="toolSub">Images Check</label></li>\
	<li><label><input type="radio" onclick="ex_link2();" name="toolSub">Link</label></li>\
	<li><label><input type="radio" onclick="ex_text();" name="toolSub">Text</label></li>\
	<li><label><input type="radio" onclick="ex_crlf();" name="toolSub">CRLF inside P</label></li>\
</ul>\
</form>\
<div class="close"><img src="'+JS_DIRECTRY+'close.png" alt="閉じる" onclick="allClear();" id="closetoolBarSub"></div>\
';
div.appendChild(bar);

// ツールバー表示エリア確保
var h2 = h + jQuery('#debagBarSub').outerHeight();
var s2 = 'padding-bottom:'+ h2 +'px';
document.body.setAttribute('style', s2);


// tool_extraction end
}



/* ---------------------------------------------
情報エリア表示
--------------------------------------------- */
function infoView(){
	var spanID = 'span' + Math.floor(Math.random()*10000);
	var div = document.createElement('div');
	div.setAttribute('id','debagBarInfoL');
	div.setAttribute('class','debagBarInfoLength');
	div.innerHTML = '\
	<div class="infoHead">\
	<p></p>\
	<span id="'+ spanID +'">Change BG</span>\
	<div class="kaihei"><img src="'+JS_DIRECTRY+'close4.png" alt="" class="hei"><img src="'+JS_DIRECTRY+'close3.png" alt="" class="kai"></div>\
	<div class="close"><img src="'+JS_DIRECTRY+'close2.png" alt="閉じる" onclick="toolClearInfoL();"></div>\
	</div>\
	<div class="debagBarInfoInner">\
	<table id="infoTableL">\
	</table>\
	</div>\
	<div class="infoHeadbtm"></div>\
	';
	document.body.appendChild(div);

	infoDrag2();
	infoFrontAchange('debagBarInfoL');

	// Change BGイベント設定
	jQuery('#'+spanID).live('click', function(){
		if(!jQuery('#debagBarInfoL #infoTableL').hasClass('alt_b')){
			jQuery('#debagBarInfoL #infoTableL').addClass('alt_b');
		} else {
			jQuery('#debagBarInfoL #infoTableL').removeClass('alt_b');
		}
	});
}

function infoViewImg(){
	var spanID = 'span' + Math.floor(Math.random()*10000);
	var div = document.createElement('div');
	div.setAttribute('id','debagBarInfoL');
	div.setAttribute('class','debagBarInfoLength');
	div.innerHTML = '\
	<div class="infoHead">\
	<ul>\
	<li onclick="ex_alt();">Img Alt</li>\
	<li onclick="ex_imgPass();">Img Path</li>\
	<li onclick="ex_imgSize();">Img Size</li>\
	</ul>\
	<span id="'+ spanID +'">Change BG</span>\
	<div class="kaihei"><img src="'+JS_DIRECTRY+'close4.png" alt="" class="hei"><img src="'+JS_DIRECTRY+'close3.png" alt="" class="kai"></div>\
	<div class="close"><img src="'+JS_DIRECTRY+'close2.png" alt="閉じる" onclick="toolClearInfoL();"></div>\
	</div>\
	<div class="debagBarInfoInner">\
	<table id="infoTableL">\
	</table>\
	</div>\
	<div class="infoHeadbtm"></div>\
	';
	document.body.appendChild(div);

	infoDrag2();
	infoFrontAchange('debagBarInfoL');

	// Change BGイベント設定
	jQuery('#'+spanID).live('click', function(){
		if(!jQuery('#debagBarInfoL #infoTableL').hasClass('alt_b')){
			jQuery('#debagBarInfoL #infoTableL').addClass('alt_b');
		} else {
			jQuery('#debagBarInfoL #infoTableL').removeClass('alt_b');
		}
	});
}
