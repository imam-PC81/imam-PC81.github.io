//Before loading----------------------------------------------------------------
var userAgent = window.navigator.userAgent.toLowerCase();
var userVer = 10;
var userSP = 1;
var userSPWidth = 1;
var heightFlatFlag = 0;
var orien = window.orientation;
if(!orien || orien == 180){orien = 0;}
if(userAgent.indexOf("msie") != -1){
    userVer = userAgent.split("msie")[1].substr(0,2);
}
if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iphone/i) || navigator.userAgent.match(/ipad/i) || navigator.userAgent.match(/Silk\//i) || navigator.userAgent.match(/Kindle\//i)){
    userSP = 2;
}

var cookieTimedate = new Date();
//limit day
var cookieTimeExpires = 30;

/* jQuery Cookie Plugin v1.3 */
var pluses = /\+/g;

function raw(s) {
    return s;
}
function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
}

var config = $.cookie = function (key, value, options) {
    // write
    if (value !== undefined) {
        options = $.extend({}, config.defaults, options);
        if (value === null) {   options.expires = -1;}
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = config.json ? JSON.stringify(value) : String(value);
        return (document.cookie = [
            encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path    ? '; path=' + options.path : '',
            options.domain  ? '; domain=' + options.domain : '',
            options.secure  ? '; secure' : ''
        ].join(''));
    }
    // read
    var decode = config.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');
    for (var i = 0, l = cookies.length; i < l; i++) {
        var parts = cookies[i].split('=');
        if (decode(parts.shift()) === key) {
            var cookie = decode(parts.join('='));
            return config.json ? JSON.parse(cookie) : cookie;
        }
    }
    return null;
};
config.defaults = {};
$.removeCookie = function (key, options) {
    if ($.cookie(key) !== null) {
        $.cookie(key, null, options);
        return true;
    }
    return false;
};
/* jQuery Cookie Plugin v1.3 */


//Change
var ResponsiveMode = $.cookie('Responsive');
loadJs();


function loadJs(){
    //Mode set
    if(ResponsiveMode && userVer >= 9){
		cookieTimedate = new Date();		
        cookieTimedate.setTime(cookieTimedate.getTime() + cookieTimeExpires*24*60*60*1000);
        $.cookie('Responsive',ResponsiveMode,{path:'/',expires:cookieTimedate});
        //$.cookie('Responsive',ResponsiveMode,{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
    }else{
		cookieTimedate = new Date();		
        cookieTimedate.setTime(cookieTimedate.getTime() + cookieTimeExpires*24*60*60*1000);
        $("meta[name='viewport']").attr("content","width=device-width,user-scalable=yes");
        
        var w = ((screen.width && userSP == 2 && $(window).width() < screen.width)?screen.width:$(window).width());
        var h = ((screen.height && userSP == 2 && $(window).height() < screen.height)?screen.height:$(window).height());
		if(userVer >= 9 && orien != 0 && w <= 767 && h <= 767){//iPad turn step 
            $.cookie('Responsive','SP',{path:'/',expires:cookieTimedate});
            //$.cookie('Responsive','SP',{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
            ResponsiveMode = 'SP';
        }else if(userVer >= 9 && orien == 0 && w <= 767){
            $.cookie('Responsive','SP',{path:'/',expires:cookieTimedate});
            //$.cookie('Responsive','SP',{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
            ResponsiveMode = 'SP';
        }else{
            $.cookie('Responsive','PC',{path:'/',expires:cookieTimedate});
            //$.cookie('Responsive','PC',{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
            ResponsiveMode = 'PC';
        }
    
    }
    
    if(ResponsiveMode == 'SP'){
	    //Before
	    $("#importCSS").attr("href","/shared/css/importSP.css");

	    //index
	    $("#indexImportCSS").attr("href","/shared/css/index_importSP.css");

	    //jcb debit
	    $("#debitImportCSS").attr("href","/personal/account/jcb_debit/shared/css/debit_importSP.css");
	    

	    //jcb debit 20181228追加
	    $("#tsuchoImportCSS").attr("href","/personal/useful/app/tsucho/shared/css/res_tsucho.css");
	    
	    //popup zoom
	    if($("#popupzoom").is("*")){
	    	$("meta[name='viewport']").attr("content","width=device-width,minimum-scale=0.25,maximum-scale=1.6,user-scalable=yes");
	    }else{
	    	$("meta[name='viewport']").attr("content","width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes");
	    }
	    
	    //After
	    loadscript('/shared/js/jquery_placeholder.js');
        loadscript('/shared/js/jquery_accordion_sp.js');
		loadscript('/shared/js/jquery_fixHeight.js');
		loadscript('/shared/js/jquery_rollover.js');
		loadscript('/shared/js/jquery_active.js');
        loadscript('/shared/js/component_sp.js');
		loadscript('/shared/js/jquery_spurl.js');
        $(responsiveSP);
    }else{
	    //Before
	    $("meta[name='viewport']").attr("content","width=930px,minimum-scale=0.25,maximum-scale=1.6,user-scalable=yes");
	    
	    //After
		if(userSP == 2){
			$(function(){
				/*spbtn visible*/
				if($("body").hasClass("en")){
					$("body").prepend('<div id="spHeadBtn"><a href="javascript:void();" onclick="SPMode()"> Change to the smartphone display </a></div>');
				} else {
					$("body").prepend('<div id="spHeadBtn"><a href="javascript:void();" onclick="SPMode()">スマートフォン表示に変更</a></div>');
				}
			});
		}
        loadscript('/shared/js/jquery_placeholder.js');
		loadscript('/shared/js/jquery_fixHeight.js');
		loadscript('/shared/js/jquery_rollover.js');
		loadscript('/shared/js/jquery_active.js');
        loadscript('/shared/js/component.js');
        $(responsivePC);



    }
}

//After loading-----------------------------------------------------------------
loadscript('/shared/js/jquery_scroll.js');

//responsive
var netbank_directlogin = "";
var netbank_directlogin_a = new Array();
var isTouch = (function() {
	return (document.ontouchstart !== undefined);
})();
var dr = isTouch ? 1500:100;
function responsivePC(){
	//netbank
	$(".directloginBlock .bnr").bind("mouseover",function(){
		clearTimeout(netbank_directlogin);
		$(".directloginBlock .btn a").each(function(){
			netbank_directlogin_a.push($(this).attr("href"));
			$(this).attr("href","javascript:void(0);");
		});
		
		$(".directloginBlock .btn").slideDown(200,function(){
			setTimeout(function(){
				$(".directloginBlock .btn a").each(function(index){
					$(this).attr("href",netbank_directlogin_a[index]);
				});
			},dr);
		});
		//$(".directloginBlock .bnr").slideOut(200);
	});
	$(".directloginBlock .btn a,.directloginBlock .btn .textNolink").mouseover(function(){
		clearTimeout(netbank_directlogin);
	}).mouseout(function(){
		netbank_directlogin = setTimeout(function(){
			$(".directloginBlock .btn").fadeOut(200);
			//$(".directloginBlock .bnr").slideIn(200);
		},500);
	});
	
}
function responsiveSP(){
	//header menu
	$("#localNaviArea .closebtn").before('<div class="spLink"></div>');
	if($("#headerAreaInner .func .form").is("*")){
		var form = $("#headerAreaInner .func .form").html();
		form = form.replace('head_btn_004.gif','head_btn_008.png');
		
		var htmlS = '<div class="clear">\
<div class="contact"><div class="btnInner">'+$("#headerAreaInner ul .contact").html()+'</div></div>\
<div class="qa"><div class="btnInner">'+$("#headerAreaInner ul .qa").html()+'</div></div>\
</div>\
<div class="fee"><div class="btnInner">'+$("#headerAreaInner ul .fee").html()+'</div></div>\
<div class="campaign"><div class="btnInner">'+$("#headerAreaInner ul .campaign").html()+'</div></div>\
</div>\
<div class="en"><div class="btnInner">'+$("#headerAreaInner ul .en").html()+'</div></div>\
'+form+'\
';
		$("#localNaviArea .spLink").html(htmlS);
	}

	if($("body.en").length){
		var htmlS = '<div class="clear">\
<div class="contact"><div class="btnInner">'+$("#headerAreaInner ul .contact").html()+'</div></div>\
<div class="qa"><div class="btnInner">'+$("#headerAreaInner ul .qa").html()+'</div></div>\
</div>\
<div class="en"><div class="btnInner">'+$("#headerAreaInner ul .en").html()+'</div></div>\
'+form+'\
';
		 $("#localNaviArea .spLink").html(htmlS);
		 
		 $("#subnaviArea .langBtn").remove();
	}
	
}
function PCMode(){
	cookieTimedate = new Date();		
	cookieTimedate.setTime(cookieTimedate.getTime() + cookieTimeExpires*24*60*60*1000);
	$.cookie('Responsive','PC',{path:'/',expires:cookieTimedate});
    //$.cookie('Responsive','PC',{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
	$('html').animate({scrollTop:0}, 0, 'swing');
	$('body').animate({scrollTop:0}, 0, 'swing');
	location.reload(true)
}
function SPMode(){
	cookieTimedate = new Date();		
	cookieTimedate.setTime(cookieTimedate.getTime() + cookieTimeExpires*24*60*60*1000);
	$.cookie('Responsive','SP',{path:'/',expires:cookieTimedate});
    //$.cookie('Responsive','SP',{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
	$('html').animate({scrollTop:0}, 0, 'swing');
	$('body').animate({scrollTop:0}, 0, 'swing');
	location.reload(true)
}
function loadscript(sURL){
	$(function(){
		$.ajax({
			type: "GET",
			cache: true,
			url: sURL,
			dataType: "script"
		});
	});
}
document.write("<script type='text/javascript' src='/shared/js/menu.js'></script>");
document.write("<script type='text/javascript' src='/shared/modal/jquery.fancybox-1.3.4.js'></script>");

$(function () {
	// 置換の対象とするclass属性。
	var $elem = $('.js-image-switch');
	// 置換の対象とするsrc属性の末尾の文字列。
	var sp = '_sp.';
	var pc = '_pc.';
	// 画像を切り替えるウィンドウサイズ。
	var replaceWidth = 768;

	function imageSwitch() {
		// ウィンドウサイズを取得する。
		var windowWidth = parseInt(window.innerWidth);

		// ページ内にあるすべての`.js-image-switch`に適応される。
		$elem.each(function () {
			var $this = $(this);
			// ウィンドウサイズが768px以上であれば_spを_pcに置換する。
			if (windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));

				// ウィンドウサイズが768px未満であれば_pcを_spに置換する。
			} else {
				$this.attr('src', $this.attr('src').replace(pc, sp));
			}
		});
	}
	imageSwitch();

	// 動的なリサイズは操作後0.2秒経ってから処理を実行する。
	var resizeTimer;
	$(window).on('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function () {
			imageSwitch();
		}, 200);
	});
});