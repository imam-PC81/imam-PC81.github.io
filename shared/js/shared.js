/*------------------------------------------------------------------------------------------------
creation date 2009.9.18
http://www.sevenbank.co.jp/
Copyright (C) Seven Bank,Ltd. All Rights Reserved.
------------------------------------------------------------------------------------------------*/
/*------------------------------
jQuery.cookie
------------------------------*/
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


$(function() {
/*------------------------------
roll over
------------------------------*/
    $.fn.rollover = function(postfix) {
        postfix = postfix || '_on';
        return this.not('[src*="'+ postfix +'."]').each(function() {
            var img = $(this);
            var src = img.attr('src');
            var src_on = [
                src.substr(0, src.lastIndexOf('.')),
                src.substring(src.lastIndexOf('.'))
            ].join(postfix);
            $('<img>').attr('src', src_on);
            img.hover(
                function() {
                    img.attr('src', src_on);
                },
                function() {
                    img.attr('src', src);
                }
            );
        });
    };
	$('img.on').rollover();

/*------------------------------
font size
------------------------------*/
(function(){

	$fontSize = $.cookie('fontSize');
	if ($('dl.size').length){
	
		if($fontSize == null) { $fontSize = "è¨"}
	
		$('img','dl.size dd ul li')[0].src="/shared/image/header/btn_font_s.gif";
		$('img','dl.size dd ul li')[1].src="/shared/image/header/btn_font_m.gif";
		$('img','dl.size dd ul li')[2].src="/shared/image/header/btn_font_l.gif";
	
		if($fontSize == "è¨"){
			$('img','dl.size dd ul li')[0].src="/shared/image/header/btn_font_s_on.gif";
		}
		else if($fontSize  == "íÜ"){
			$('img','dl.size dd ul li')[1].src="/shared/image/header/btn_font_m_on.gif";
			$("body").css('font-size','14px');
		}
		else if($fontSize  == "ëÂ"){
			$('img','dl.size dd ul li')[2].src="/shared/image/header/btn_font_l_on.gif";
			$("body").css('font-size','16px');
		}

	$('dl.size dd ul li').click(function(){
		$('img','dl.size dd ul li')[0].src="/shared/image/header/btn_font_s.gif";
		$('img','dl.size dd ul li')[1].src="/shared/image/header/btn_font_m.gif";
		$('img','dl.size dd ul li')[2].src="/shared/image/header/btn_font_l.gif";

		if($(this).find("img").attr("alt") == "è¨"){
			$(this).find("img").attr("src","/shared/image/header/btn_font_s_on.gif");
			$("body").css('font-size','12px');
		}
		if($(this).find("img").attr("alt") == "íÜ"){
			$(this).find("img").attr("src","/shared/image/header/btn_font_m_on.gif");
			$("body").css('font-size','14px');
		}
		if($(this).find("img").attr("alt") == "ëÂ"){
			$(this).find("img").attr("src","/shared/image/header/btn_font_l_on.gif");
			$("body").css('font-size','16px');
		}

		$.cookie('fontSize', $(this).find("img").attr("alt") , { expires: 7 , path:'/'});

		return false;
	});
	
	}else{
		return false;
	}
	
 })();


/*------------------------------
font size for English
------------------------------*/
(function(){

	$fontSize = $.cookie('fontSizeEng');
	if ($('dl.sizeEng').length){
		
	if($fontSize == null) { $fontSize = "small"}

	$('img','dl.sizeEng dd ul li')[0].src="/english/shared/image/header/btn_font_s.gif";
	$('img','dl.sizeEng dd ul li')[1].src="/english/shared/image/header/btn_font_m.gif";
	$('img','dl.sizeEng dd ul li')[2].src="/english/shared/image/header/btn_font_l.gif";

	if($fontSize == "small"){
		$('img','dl.sizeEng dd ul li')[0].src="/english/shared/image/header/btn_font_s_on.gif";
	}
	else if($fontSize  == "middle"){
		$('img','dl.sizeEng dd ul li')[1].src="/english/shared/image/header/btn_font_m_on.gif";
		$("body").css('font-size','14px');
	}
	else if($fontSize  == "large"){
		$('img','dl.sizeEng dd ul li')[2].src="/english/shared/image/header/btn_font_l_on.gif";
		$("body").css('font-size','16px');
	}

	$('dl.sizeEng dd ul li').click(function(){
		$('img','dl.sizeEng dd ul li')[0].src="/english/shared/image/header/btn_font_s.gif";
		$('img','dl.sizeEng dd ul li')[1].src="/english/shared/image/header/btn_font_m.gif";
		$('img','dl.sizeEng dd ul li')[2].src="/english/shared/image/header/btn_font_l.gif";

		if($(this).find("img").attr("alt") == "small"){
			$(this).find("img").attr("src","/english/shared/image/header/btn_font_s_on.gif");
			$("body").css('font-size','12px');
		}
		if($(this).find("img").attr("alt") == "middle"){
			$(this).find("img").attr("src","/english/shared/image/header/btn_font_m_on.gif");
			$("body").css('font-size','14px');
		}
		if($(this).find("img").attr("alt") == "large"){
			$(this).find("img").attr("src","/english/shared/image/header/btn_font_l_on.gif");
			$("body").css('font-size','16px');
		}

		$.cookie('fontSizeEng', $(this).find("img").attr("alt") , { expires: 7 , path:'/'});

		return false;
	});

	}else{
			return false;
		}


 })();


});

/*------------------------------
current path
------------------------------*/
var currentPath = location.pathname.replace(/\/index.html/,'/')+location.hash;


$(document).ready(function(){
//Load
	$('div#sub ul.localNavH li').each(function(){
		if($(this).parents('ul').length = 1){
			$(this).find('ul').hide();
		}
		if($(this).find('a').attr('href').replace(/\/index.html/,'/') == currentPath){
			$(this).addClass('active');
			$(this).parents('ul').show();
			$(this).find('ul').show();
			$(this).parents('li.active').removeClass('active');
		}else if($(this).find('a').attr('href').replace(/\/index.html/,'/')+location.hash == currentPath){
				$(this).addClass('active');
				$(this).parents('ul').show();
				$(this).find('ul').show();
				$(this).parents('li.active').removeClass('active');
		}else{
			$(this).removeClass('active');
		}
		if($(this).find('a').attr('pathname') == location.pathname || "/"+$(this).find('a').attr('pathname') == location.pathname){
			$(this).parents('ul').show();
			$(this).parent('li').find('ul').show();
			$(this).not('.active').find('ul').show();
			$(this).parent('ul').find('li').not('.active').find('ul').hide();
		}
	});



//Click
	$('div#sub ul.localNavH li a').click(function(){
		$('#sub ul.localNavH li.active').removeClass('active');
		$(this).parent('li').addClass('active');

		$(this).parent('li').parent('ul').find('li').not('.active').find('ul').hide();
		$(this).parent('li').parent('ul').find('li.active').find('ul').show();

		if($(this).attr('pathname') == location.pathname || "/"+$(this).attr('pathname') == location.pathname){
			$(this).parent('li').find('ul').show();
		}
	});
});


/*------------------------------
max-width for IE6
------------------------------*/
// minmax.js: make IE5+/Win support CSS min/max-width/height
// version 1.0, 08-Aug-2003
// written by Andrew Clover <and@doxdesk.com>, use freely

/*@cc_on
@if (@_win32 && @_jscript_version>4)

var minmax_elements;

minmax_props= new Array(
  new Array('min-width', 'minWidth'),
  new Array('max-width', 'maxWidth'),
  new Array('min-height','minHeight'),
  new Array('max-height','maxHeight')
);

// Binding. Called on all new elements. If <body>, initialise; check all
// elements for minmax properties

function minmax_bind(el) {
  var i, em, ms;
  var st= el.style, cs= el.currentStyle;

  if (minmax_elements==window.undefined) {
    // initialise when body element has turned up, but only on IE
    if (!document.body || !document.body.currentStyle) return;
    minmax_elements= new Array();
    window.attachEvent('onresize', minmax_delayout);
    // make font size listener
    em= document.createElement('div');
    em.setAttribute('id', 'minmax_em');
    em.style.position= 'absolute'; em.style.visibility= 'hidden';
    em.style.fontSize= 'xx-large'; em.style.height= '5em';
    em.style.top='-5em'; em.style.left= '0';
	if (em.style.setExpression) {
	   try {
		   em.style.setExpression('width', 'minmax_checkFont()');
		   document.body.insertBefore(em, document.body.firstChild);
		}
		catch(err){} 
	}
  }

  // transform hyphenated properties the browser has not caught to camelCase
  for (i= minmax_props.length; i-->0;)
    if (cs[minmax_props[i][0]])
      st[minmax_props[i][1]]= cs[minmax_props[i][0]];
  // add element with properties to list, store optimal size values
  for (i= minmax_props.length; i-->0;) {
    ms= cs[minmax_props[i][1]];
    if (ms && ms!='auto' && ms!='none' && ms!='0' && ms!='') {
      st.minmaxWidth= cs.width; st.minmaxHeight= cs.height;
      minmax_elements[minmax_elements.length]= el;
      // will need a layout later
      minmax_delayout();
      break;
  } }
}

// check for font size changes

var minmax_fontsize= 0;
function minmax_checkFont() {
  var fs= document.getElementById('minmax_em').offsetHeight;
  if (minmax_fontsize!=fs && minmax_fontsize!=0)
    minmax_delayout();
  minmax_fontsize= fs;
  return '5em';
}

// Layout. Called after window and font size-change. Go through elements we
// picked out earlier and set their size to the minimum, maximum and optimum,
// choosing whichever is appropriate

// Request re-layout at next available moment
var minmax_delaying= false;
function minmax_delayout() {
  if (minmax_delaying) return;
  minmax_delaying= true;
  window.setTimeout(minmax_layout, 0);
}

function minmax_stopdelaying() {
  minmax_delaying= false;
}

function minmax_layout() {
  window.setTimeout(minmax_stopdelaying, 100);
  var i, el, st, cs, optimal, inrange;
  for (i= minmax_elements.length; i-->0;) {
    el= minmax_elements[i]; st= el.style; cs= el.currentStyle;

    // horizontal size bounding
    st.width= st.minmaxWidth; optimal= el.offsetWidth;
    inrange= true;
    if (inrange && cs.minWidth && cs.minWidth!='0' && cs.minWidth!='auto' && cs.minWidth!='') {
      st.width= cs.minWidth;
      inrange= (el.offsetWidth<optimal);
    }
    if (inrange && cs.maxWidth && cs.maxWidth!='none' && cs.maxWidth!='auto' && cs.maxWidth!='') {
      st.width= cs.maxWidth;
      inrange= (el.offsetWidth>optimal);
    }
    if (inrange) st.width= st.minmaxWidth;

    // vertical size bounding
    st.height= st.minmaxHeight; optimal= el.offsetHeight;
    inrange= true;
    if (inrange && cs.minHeight && cs.minHeight!='0' && cs.minHeight!='auto' && cs.minHeight!='') {
      st.height= cs.minHeight;
      inrange= (el.offsetHeight<optimal);
    }
    if (inrange && cs.maxHeight && cs.maxHeight!='none' && cs.maxHeight!='auto' && cs.maxHeight!='') {
      st.height= cs.maxHeight;
      inrange= (el.offsetHeight>optimal);
    }
    if (inrange) st.height= st.minmaxHeight;
  }
}

// Scanning. Check document every so often until it has finished loading. Do
// nothing until <body> arrives, then call main init. Pass any new elements
// found on each scan to be bound   

var minmax_SCANDELAY= 500;

function minmax_scan() {
  var el;
  for (var i= 0; i<document.all.length; i++) {
    el= document.all[i];
    if (!el.minmax_bound) {
      el.minmax_bound= true;
      minmax_bind(el);
  } }
}

var minmax_scanner;
function minmax_stop() {
  window.clearInterval(minmax_scanner);
  minmax_scan();
}

minmax_scan();
minmax_scanner= window.setInterval(minmax_scan, minmax_SCANDELAY);
window.attachEvent('onload', minmax_stop);

@end @*/

/*------------------------------
 focus action
------------------------------*/
function iptfocus(fn,bn){

eval("document."+fn+"."+bn).value="";

}


	
