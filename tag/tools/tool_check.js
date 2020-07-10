// 個別チェックJS

function tool_check(){

/* ---------------------------------------------
画面初期化
--------------------------------------------- */
//allClear();
checkClear();


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
<ul id="set_checkValue">\
  <li><label><input type="checkbox" onclick="c_alt();" id="checkValue_alt">Img ALT</label></li>\
  <li><label><input type="checkbox" onclick="c_src();" id="checkValue_src">Img src</label></li>\
  <li><label><input type="checkbox" onclick="c_imghover();" id="checkValue_imghover">Hover(img)(β版)</label></li>\
  <li><label><input type="checkbox" onclick="c_link();" id="checkValue_link">Link</label></li>\
  <li><label><input type="checkbox" onclick="c_link2();" id="checkValue_link2">Link(Decoded)</label></li>\
  <li><label><input type="checkbox" onclick="c_link_title();" id="checkValue_link_title">Link(Title)</label></li>\
  <li><label><input type="checkbox" onclick="c_parameter();" id="checkValue_parameter">Link Parameter</label></li>\
  <li><label><input type="checkbox" onclick="c_parameter_kai();" id="checkValue_parameter_kai">Link Parameter(Line breadk display)</label></li>\
  <li><label><input type="checkbox" onclick="c_anchor();" id="checkValue_anchor">Anchor Link</label></li>\
  <li><label><input type="checkbox" onclick="c_blank();" id="checkValue_blank">Target Attr</label></li>\
  <li><label><input type="checkbox" onclick="c_dummyLink();" id="checkValue_dummyLink">Test server path</label></li>\
  <li><label><input type="checkbox" onclick="c_httpsLink();" id="checkValue_httpsLink">https over http path</label></li>\
  <li><label><input type="checkbox" onclick="c_kana();" id="checkValue_kana">Half width kana(β版)</label></li>\
  <li><label><input type="checkbox" onclick="c_dummyText();" id="checkValue_dummyText">Dummy Text(β版)</label></li>\
  <li><label><input type="checkbox" onclick="c_dummyFile();" id="checkValue_dummyFile">Dummy File</label></li>\
  <li><label><input type="checkbox" onclick="c_emptyTag();" id="checkValue_emptyTag">Empty Tag</label></li>\
  <li><label><input type="checkbox" onclick="c_testcheckA();" id="checkValue_testcheckA">Test Check 1</label></li>\
</ul>\
</form>\
<div class="close"><img src="'+JS_DIRECTRY+'close.png" alt="閉じる" onclick="allClear();" id="closetoolBarSub"></div>\
';
div.appendChild(bar);

// ツールバー表示エリア確保
var h2 = h + jQuery('#debagBarSub').outerHeight();
var s2 = 'padding-bottom:'+ h2 +'px';
document.body.setAttribute('style', s2);

// 読み込み時、保存反映
if(window.localStorage && localStorage.getItem('set_checkValue') !== null){
  // いったん消す
  jQuery('#set_checkValue li').css('display', 'none');

  // 保存した値取得
  var ck_val = localStorage.getItem('set_checkValue').split(',');

  // チェック
  for(var i=0; i<ck_val.length; i++){
    jQuery('#'+ ck_val[i]).parents('li').css('display', 'inline-block');
  }
}

// tool_check end
}

//