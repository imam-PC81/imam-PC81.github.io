//rollover
jQuery.fn.rollover = function(suffix) {
	suffix = suffix || '_on';
	var check = new RegExp(suffix + '\\.\\w+$');
	return this.each(function() {
		var img = jQuery(this);
		var src = img.attr('src');
		if (check.test(src)) return;
		var _on = src.replace(/\.\w+$/, suffix + '$&');
		jQuery('<img>').attr('src', _on);
		img.hover(
			function() {
				img.attr('src', _on);
				img.parents('.btnAtmBlock').addClass('active');
				img.parents('.btnAppBlock').addClass('active');
				img.parents('.btnAccountBlock').addClass('active');
				img.parents('.btnAccountBlock_loan').addClass('active');
				img.parents('.btnAccountBlock_soukin').addClass('active');
				img.parents('.btnBankBlock').addClass('active');
			},
			function() {
				img.attr('src', src);
				img.parents('.btnAtmBlock').removeClass('active');
				img.parents('.btnAppBlock').removeClass('active');
				img.parents('.btnAccountBlock').removeClass('active');
				img.parents('.btnAccountBlock_loan').removeClass('active');
				img.parents('.btnAccountBlock_soukin').removeClass('active');
				img.parents('.btnBankBlock').removeClass('active');
			}
		);
		
	});
};
jQuery.fn.rolloverLink = function(suffix) {//topbtn
	suffix = suffix || '_on';
	var check = new RegExp(suffix + '\\.\\w+$');
	return this.each(function() {
		var obj = jQuery(this);
		var img = jQuery('img.over',obj);
		var src = img.attr('src');
		if (check.test(src)) return;
		var _on = src.replace(/\.\w+$/, suffix + '$&');
		jQuery('<img>').attr('src', _on);
		obj.hover(
			function() {
				img.attr('src', _on);
				if(obj.hasClass('btnAtmBlock')){obj.addClass('active');}
				if(obj.hasClass('btnAppBlock')){obj.addClass('active');}
				if(obj.hasClass('btnAccountBlock')){obj.addClass('active');}
				if(obj.hasClass('btnAccountBlock_loan')){obj.addClass('active');}
				if(obj.hasClass('btnAccountBlock_soukin')){obj.addClass('active');}
				if(obj.hasClass('btnBankBlock')){obj.addClass('active');}
			},
			function() {
				img.attr('src', src);
				if(obj.hasClass('btnAtmBlock')){obj.removeClass('active');}
				if(obj.hasClass('btnAppBlock')){obj.removeClass('active');}
				if(obj.hasClass('btnAccountBlock')){obj.removeClass('active');}
				if(obj.hasClass('btnAccountBlock_loan')){obj.removeClass('active');}
				if(obj.hasClass('btnAccountBlock_soukin')){obj.removeClass('active');}
				if(obj.hasClass('btnBankBlock')){obj.removeClass('active');}
			}
		);
		
	});
};

jQuery(function($) {
	$('img.rollover').rollover();
	$('a.rolloverLink').rolloverLink();
});



