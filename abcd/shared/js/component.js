//////////////////////////////////////////////////////////
//
// Component for Pc Mode
//
//////////////////////////////////////////////////////////

// ua Decision
//-------------------------------------------------------
$(function(){
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1){
		$("html").addClass("iphone");
	}else if(agent.search(/iPad/) != -1){
		$("html").addClass("ipad");
	}else if(agent.search(/Android/) != -1){
		$("html").addClass("android");
	}
});


// AccordionHeader
//-------------------------------------------------------
//width Adjust
$(function(){
	if(jQuery.browser.msie && parseInt(jQuery.browser.version) == 7){
		$('div.accordionBlock01').each(function(){
			var imgW= $(this).find('span.ico').width();
			var wrapW= $(this).find('.acHead').width();
			var toggleW= $(this).find('a.acLabel').width();
			$(this).find('span.title').css('width',wrapW-toggleW-imgW-47);
		});	
	}
	if($('html').attr('lang') == 'en'){
		$('div.accordionBlock01 a.acLabel').bind('click', function() {
			if($(this).parent().parent().parent().find('div.acContents').css('display')=='none'){
				$(this).children('span').text('Close');
				$(this).parent().parent().parent().find('div.acContents').slideDown('333ms');	
				$(this).parent().parent().parent().addClass('act');
			}else{
				$(this).parent().parent().parent().find('div.acContents').slideUp('333ms');
				$(this).children('span').text('Detail');
				$(this).parent().parent().parent().removeClass('act');
			}
		});
	}
	else{
		$('div.accordionBlock01 a.acLabel').bind('click', function() {
			if($(this).parent().parent().parent().find('div.acContents').css('display')=='none'){
				$(this).children('span').text('閉じる');
				$(this).parent().parent().parent().find('div.acContents').slideDown('333ms');	
				$(this).parent().parent().parent().addClass('act');
			}else{
				$(this).parent().parent().parent().find('div.acContents').slideUp('333ms');
				$(this).children('span').text('くわしく見る');
				$(this).parent().parent().parent().removeClass('act');
			}
		});
	}
});



// fontSizeChange
//-------------------------------------------------------
$(function(){
	$("#fontSizeChange ul li:eq(0) a").bind('click', function(){
		if($('#mainArea,#topMainArea,.meritWrap01').is("*")){
			$('#mainArea,#topMainArea,.meritWrap01').removeClass('fLarge');
		}else{
			$('#content').removeClass('fLarge');
		}
		$("#fontSizeChange ul li:eq(0)").removeClass("normal2");
		$("#fontSizeChange ul li:eq(1)").removeClass("large2");
		$("#fontSizeChange ul li:eq(0)").addClass("normal");
		$("#fontSizeChange ul li:eq(1)").addClass("large");
		return false;
	});
	$("#fontSizeChange ul li:eq(1) a").bind('click', function(){
		if($('#mainArea,#topMainArea,.meritWrap01').is("*")){
			$('#mainArea,#topMainArea,.meritWrap01').addClass('fLarge');
		}else{
			$('#content').addClass('fLarge');
		}
		$("#fontSizeChange ul li:eq(0)").removeClass("normal");
		$("#fontSizeChange ul li:eq(1)").removeClass("large");
		$("#fontSizeChange ul li:eq(0)").addClass("normal2");
		$("#fontSizeChange ul li:eq(1)").addClass("large2");
		return false;
	});
});

// customerSupport icon zoom
//-------------------------------------------------------
$(function(){
	if($('div.customerSupportBlock01').length){
		var zoom = 1.1;
		var moveY = -10;
		
		$('.item').hover(function(){
			org_width = $(this).find('span.body img').width();
			org_height = $(this).find('span.body img').height();
			width = $(this).find('span.body img').width() * zoom;
			height = $(this).find('span.body img').height() * zoom;
			
			$(this).find('span.body img').stop().animate({
				'width':width,
				'height':height,
				'top':moveY
			},{duration:100});
		},
		function(){
			$(this).find('span.body img').stop().animate({
				'width':org_width, 
				'height':org_height,
				'top':0
				},{duration:100});
		});
	};
});

// Popup
//-------------------------------------------------------
jQuery.fn.popupwindow = function(p){

	var profiles = p || {};
	return this.each(function(index){
		var settings, parameters, mysettings, b, a, winObj;
		
		// for overrideing the default settings
		mysettings = (jQuery(this).attr("rel") || "").split(",");

		
		settings = {
			height:600, // sets the height in pixels of the window.
			width:600, // sets the width in pixels of the window.
			toolbar:0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			resizable:1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			left:0, // left position when the window appears.
			top:0, // top position when the window appears.
			center:0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
			createnew:1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
			onUnload:null // function to call when the window is closed
		};

		// if mysettings length is 1 and not a value pair then assume it is a profile declaration
		// and see if the profile settings exists

		if(mysettings.length == 1 && mysettings[0].split(":").length == 1)
		{
			a = mysettings[0];
			// see if a profile has been defined
			if(typeof profiles[a] != "undefined")
			{
				settings = jQuery.extend(settings, profiles[a]);
			}
		}
		else
		{
			// overrides the settings with parameter passed in using the rel tag.
			for(var i=0; i < mysettings.length; i++)
			{
				b = mysettings[i].split(":");
				if(typeof settings[b[0]] != "undefined" && b.length == 2)
				{
					settings[b[0]] = b[1];
				}
			}
		}

		// center the window
		if (settings.center == 1)
		{
			settings.top = (screen.height-(settings.height + 110))/2;
			settings.left = (screen.width-settings.width)/2;
		}
		
		parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars  + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left  + ",screenX=" + settings.left + ",top=" + settings.top  + ",screenY=" + settings.top;
		
		jQuery(this).bind("click", function(){
			var name = settings.createnew ? "PopUpWindow" + index : "PopUpWindow";
			winObj = window.open(this.href, name, parameters);
			
			if (settings.onUnload) {
				// Incremental check for window status
				// Attaching directly to window.onunlaod event causes invoke when document within window is reloaded
				// (i.e. an inner refresh)
				unloadInterval = setInterval(function() {
					if (!winObj || winObj.closed) {
						clearInterval(unloadInterval);	
						settings.onUnload.call($(this));
					}
				},500);
			}
			
			winObj.focus();
			
			return false;
		});
	});
};

$(function() {
	var profiles =
	{	
		typeA:
		{
			height:700,
			width:800,
			status:1,
			scrollbars:1,
			center:1,
			resizable:1
		},
	
		typeB:
		{
			height:700,
			width:900,
			status:1,
			scrollbars:1,
			center:1,
			resizable:1
		}
	};
	$(function(){
			$(".popup").not("body").popupwindow(profiles);
	});
});

function siteSearch() {
	var windowName = "searchWindow";
	var winWidth = "800";
	var winHeight = "700";
	var x = (screen.width - winWidth) / 2;
	var y = (screen.height - winHeight) / 2; 
	var options = "width=" + winWidth + ", \
				   height=" + winHeight + ", \
				   left="+ x + ", \
				   top=" + y+ ", \
				   menubar=0, \
				   toolbar=0, \
				   location=0, \
				   status=0, \
				   resizable=no, \
				   scrollbars=1, \
				   titlebar=1, \
				   channelmode=0, \
				   fullscreen=0";		   			   
	window.open('',windowName, options);	
	return false;
}

