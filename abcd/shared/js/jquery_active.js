/*------------------------------
current path
------------------------------*/
var currentPath = currentPath || location.pathname.replace(/\/index.html/,'/');
var currentPathD = currentPath.split('/');

$(document).ready(function(){
	//english globalNavi active
	if($('html').attr('lang').match(/^(en|ko|zh|pt|th_TH|ms|in|vi|fr|de)$/)){
		currentPathGlobal = '/'+currentPathD[1]+'/'+currentPathD[2]+'/'+currentPathD[3]+'/';
		if(currentPathD[2] == '' ){
			currentPathGlobal = '/english/';
		}else if(currentPathD[1] == 'intlcard'){
			currentPathGlobal = '/english/personal/atm/';
		}else if(currentPathD[2] == 'ir'){
			currentPathGlobal = '/english/ir/';
		}
		var img = $('a[href="'+currentPathGlobal+'"] img',$('#globalNaviArea'));
		if(img.is('*')){
			var src = img.attr('src');
			img.attr('src',src.split('.').join('_ac.'));
			img.removeClass('rollover');
			img.unbind();
		}
		//localNavi active
		currentPathGlobal = '/'+currentPathD[1]+'/'+currentPathD[2]+'/'+currentPathD[3]+'/';
		if(currentPathD[3] == 'library' || (currentPathD[2] === 'ir' && location.hash === '#library')){
			currentPathGlobal = '/'+currentPathD[1]+'/'+currentPathD[2]+'/#library';
		}
		img = $('a[href="'+currentPathGlobal+'"] img',$('#localNaviArea'));
		if(img.is('*')){
			var src = img.attr('src');
			img.attr('src',src.split('.').join('_ac.'));
			img.removeClass('rollover');
			img.unbind();
		}
	}else{
		//jp globalNavi active
		var currentPathGlobal = '/'+currentPathD[1]+'/';
		if(currentPathD[1] == 'intlcard' || currentPathD[1] == 'personal' || !currentPathD[1]){
			currentPathGlobal = '/';
		}
		var img = $('a[href="'+currentPathGlobal+'"] img',$('#globalNaviArea'));
		if(img.is('*')){
			var src = img.attr('src');
			img.attr('src',src.split('.').join('_ac.'));
			img.removeClass('rollover');
			img.unbind();
		}
		//localNavi active
		currentPathGlobal = '/'+currentPathD[1]+'/'+currentPathD[2]+'/';
		if(currentPathD[1] == 'intlcard'){
			currentPathGlobal = '/personal/atm/';
		}
		img = $('a[href="'+currentPathGlobal+'"] img',$('#localNaviArea'));
		if(img.is('*')){
			var src = img.attr('src');
			img.attr('src',src.split('.').join('_ac.'));
			img.removeClass('rollover');
			img.unbind();
		}
	}

	snavActionfunction();

});

//subnavi active
function snavActionfunction(){
	var actNow = 1;
	$('#subnaviArea .naviBlock02 dd.dirLv4 li').each(function(){
		//set
		$('a[href*="#"]',$(this)).click(function(){setTimeout(snavActionfunction,100)});
		$(this).find('ul').hide();

		//active
		if(actNow == 1 && $(this).find('a').attr('href').replace(/\/index.html/,'/') == currentPath+location.hash){
			$(this).addClass('act');
			$(this).parents('ul').show();
			$(this).find('ul').show();
			$(this).find('ul ul').hide();
			$(this).parents('li.act').removeClass('act');
			actNow++;
		}else if(actNow == 1 && !location.hash && $(this).find('a').attr('href').replace(/\/index.html/,'/') == currentPath){
			$(this).addClass('act');
			$(this).parents('ul').show();
			$(this).find('ul').show();
			$(this).find('ul ul').hide();
			$(this).parents('li.act').removeClass('act');
		}else{
			$(this).removeClass('act');
		}
		if($(this).find('a').attr('pathname') == location.pathname || "/"+$(this).find('a').attr('pathname') == location.pathname){
			$(this).parents('ul').show();
			$(this).parent('li').find('ul').show();
			$(this).not('.act').find('ul').show();
			$(this).parent('ul').find('li').not('.act').find('ul').hide();
		}
	});
}
