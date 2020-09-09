/*------------------------------------------------------------------------------------------------

creation date 2009.9.4

http://www.sevenbank.co.jp/

Copyright (C) Seven Bank,Ltd. All Rights Reserved.

------------------------------------------------------------------------------------------------*/

/*------------------------------

for new popup

------------------------------*/

$(function(){

	$('.popupS').click(function(){

		window.open(this.href, 'popupS', 'width=440,height=550,scrollbars=yes,menubar=no,toolbar=no,titlebar=yes,resizable=yes,location=yes,directories=yes,status=yes');

		return false;

	});

	$('.popupM').click(function(){

		window.open(this.href, 'popupM', 'width=710,height=550,scrollbars=yes,menubar=no,toolbar=no,titlebar=yes,resizable=yes,location=yes,directories=yes,status=yes');

		return false;

	});

	$('.popupL').click(function(){

		window.open(this.href, 'popupL', 'width=850,height=550,scrollbars=yes,menubar=no,toolbar=no,titlebar=yes,resizable=yes,location=yes,directories=yes,status=yes');

		return false;

	});
	
	$('.popupL02').click(function(){

		window.open(this.href, 'popupL02', 'width=1000,height=600,scrollbars=yes,menubar=no,toolbar=no,titlebar=yes,resizable=yes,location=yes,directories=yes,status=yes');

		return false;

	});

	$('.popupLL').click(function(){

		window.open(this.href, 'popupL', 'width=1000,height=850,scrollbars=yes,menubar=no,toolbar=no,titlebar=yes,resizable=yes,location=yes,directories=yes,status=yes');

		return false;

	});
	
	$('.popupCardSelect').click(function(){

		window.open(this.href, 'popupCardSelect', 'width=800,height=600,scrollbars=yes,menubar=no,toolbar=no,resizable=no,location=yes,directories=no,status=yes,scrolling=yes');

		return false;

	});



	$('.popupNews').click(function(){

		window.open(this.href, 'popupNews', 'width=704,height=550,scrollbars=yes,menubar=no,toolbar=no,titlebar=yes,resizable=yes,location=yes,directories=yes,status=yes');

		return false;

	});

	$('.close').click(function(){

		window.close();

		return false;

	});

});