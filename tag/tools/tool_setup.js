// 設定JS

function tool_setup(){

/* ---------------------------------------------
画面初期化
--------------------------------------------- */
allClear();


/* ---------------------------------------------
設定画面表示
--------------------------------------------- */
var div = document.createElement('div');
div.setAttribute('id','debagBarSetup');
div.innerHTML = '\
<div id="debagBarSetupInner">\
<p>Display/Hide Individual Check</p>\
<div class="close"><img src="'+JS_DIRECTRY+'close.png" alt="閉じる" onclick="toolClearSetup();"></div>\
<ul id="select_checkValue">\
  <li><label><input type="checkbox" id="checkValue_alt" checked="checked">Img ALT</label></li>\
  <li><label><input type="checkbox" id="checkValue_src" checked="checked">Img src</label></li>\
  <li><label><input type="checkbox" id="checkValue_imghover" checked="checked">Hover(img)(β版)</label></li>\
  <li><label><input type="checkbox" id="checkValue_link" checked="checked">Link</label></li>\
  <li><label><input type="checkbox" id="checkValue_link2" checked="checked">Link(Decoded)</label></li>\
  <li><label><input type="checkbox" id="checkValue_parameter" checked="checked">Link parameter</label></li>\
  <li><label><input type="checkbox" id="checkValue_parameter_kai" checked="checked">Link parameter(Line break display)</label></li>\
  <li><label><input type="checkbox" id="checkValue_anchor" checked="checked">Anchor link</label></li>\
  <li><label><input type="checkbox" id="checkValue_blank" checked="checked">Target Attr</label></li>\
  <li><label><input type="checkbox" id="checkValue_dummyLink" checked="checked">Test server path</label></li>\
  <li><label><input type="checkbox" id="checkValue_httpsLink" checked="checked">https over http</label></li>\
  <li><label><input type="checkbox" id="checkValue_kana" checked="checked">half width kana(β版)</label></li>\
  <li><label><input type="checkbox" id="checkValue_dummyText" checked="checked">Dummy text(β版)</label></li>\
  <li><label><input type="checkbox" id="checkValue_dummyFile" checked="checked">Dummy File</label></li>\
  <li><label><input type="checkbox" id="checkValue_emptyTag" checked="checked">Empty Tag</label></li>\
  <li><label><input type="checkbox" id="checkValue_testcheckA" checked="checked">Test Check 1</label></li>\
  <li><label><input type="checkbox" id="checkValue_testcheckB" checked="checked">Test Check 2</label></li>\
  <li><label><input type="checkbox" id="checkValue_testcheckC" checked="checked">Test Check 3</label></li>\
</ul>\
<div class="st_btm"><button id="submit_checkValue">Save & Close</button></div>\
<div class="st_btm"><button id="clear_checkValue">Clear</button></div>\
</div>\
';
document.body.appendChild(div);

var height = jQuery('body').outerHeight()
jQuery('#debagBarSetup').css('height', height + 'px');

// 読み込み時、保存反映
if(window.localStorage && localStorage.getItem('set_checkValue') !== null){
  // いったん消す
  jQuery('#select_checkValue input').attr('checked', false);

  // 保存した値取得
  var ck_val = localStorage.getItem('set_checkValue').split(',');

  // チェック
  for(var i=0; i<ck_val.length; i++){
    jQuery('#'+ ck_val[i]).attr('checked', true);
  }
}

/* ---------------------------------------------
設定保存
--------------------------------------------- */
jQuery('#submit_checkValue').click(function(){
  // チェックの確認
  var ck_obj = jQuery('#select_checkValue input:checked');
  var ck_val = '';

  for (var i=0; i<ck_obj.length; i++){
    ck_val += jQuery(ck_obj[i]).attr('id') + ',';
  }
  ck_val = ck_val.replace(/,$/, '');

  // localStorageに保存
  if(window.localStorage){
    localStorage.setItem('set_checkValue', ck_val);
  }

  // 閉じる
  toolClearSetup();
});

/* ---------------------------------------------
設定クリア
--------------------------------------------- */
jQuery('#clear_checkValue').click(function(){
  // すべてチェック
  jQuery('#select_checkValue input').attr('checked', true);

  // localStorageのデータ削除
  if(window.localStorage){
    localStorage.removeItem('set_checkValue');
  }
});

// tool_setup end
}
