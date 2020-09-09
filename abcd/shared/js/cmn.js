//Before loading----------------------------------------------------------------
var userAgent = window.navigator.userAgent.toLowerCase();
var userVer = 10;
var userSP = 1;

if(userAgent.indexOf("msie") != -1){
    userVer = userAgent.split("msie")[1].substr(0,2);
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
var ResponsiveMode = 'PC';
loadJs();


function loadJs(){
    //Mode set
	cookieTimedate = new Date();		
	cookieTimedate.setTime(cookieTimedate.getTime() + cookieTimeExpires*24*60*60*1000);
	$.cookie('Responsive',ResponsiveMode,{path:'/',expires:cookieTimedate});
	//$.cookie('Responsive',ResponsiveMode,{path:'/',expires:cookieTimedate,domain:'.sevenbank.co.jp'});
	
	//Before
	$("meta[name='viewport']").attr("content","width=930px,minimum-scale=0.25,maximum-scale=1.6,user-scalable=yes");

	//After
	loadscript('/shared/js/jquery_placeholder.js');
	loadscript('/shared/js/jquery_fixHeight.js');
	loadscript('/shared/js/jquery_rollover.js');
	loadscript('/shared/js/jquery_active.js');
	loadscript('/shared/js/component.js');
	$(responsivePC);
}


//After loading-----------------------------------------------------------------
loadscript('/shared/js/jquery_scroll.js');

//responsive
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
			},1000);
		});
		//$(".directloginBlock .bnr").slideOut(200);
	});
	$(".directloginBlock .btn a").mouseover(function(){
		clearTimeout(netbank_directlogin);
	}).mouseout(function(){
		netbank_directlogin = setTimeout(function(){
			$(".directloginBlock .btn").fadeOut(200);
			//$(".directloginBlock .bnr").slideIn(200);
		},500);
	});
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
// document.write("<script type='text/javascript' src='/shared/modal/jquery.fancybox-1.3.4.js'></script>");