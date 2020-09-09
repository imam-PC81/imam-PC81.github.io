//page scroll
$(scrollSet);

function scrollSet(){
	//Exception
	if(location.pathname.replace(/\/index.html/,'/') == "/corp/guide/"){return false;}
    
    $("a[href^='#']").each(function() {
    	if($(this).attr("onclick") && $(this).attr("onclick").match(/^return/)){return true;}
    	if($(this).attr("href") && $(this).attr("href").match(/^#$/)){return true;}
    	
    	$(this).click(function(){
			var speed = 500;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('html').animate({scrollTop:position}, speed, 'swing');
			$('body').animate({scrollTop:position}, speed, 'swing');
	        return false;
        });
    });
	//remove
	$("#slideNavi a[href^='#']").unbind("click");
}
function scrollAnime(obj){
	var speed = 500;
	var href= obj;
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$('html').animate({scrollTop:position}, speed, 'swing');
	$('body').animate({scrollTop:position}, speed, 'swing');
}
