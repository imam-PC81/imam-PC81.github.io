//accordion_sp
function acMenu(obj) {//click function
	obj = $(obj).parent().parent();
	if($(obj).hasClass("open") && $(".Inner",obj).css("display") != "none"){
		$(".Inner",obj).animate({
			height: 'hide'
		}, 300);
		$(obj).removeClass("open");
		$(".icon",obj).html(";");
	}else if($(obj).hasClass("open")){
		$(".Inner",obj).animate({
			height: 'show'
		}, 300);
		$(obj).addClass("open");
		$(".icon",obj).html(":");
	}else{
		$(".Inner",obj).animate({
			height: 'show'
		}, 300);
		$(obj).addClass("open");
		$(".icon",obj).html(":");
	}
    return true;
}

function tabOpen(obj,num){
	obj = $("#"+obj);
	$(".tab li .btn",obj).removeClass("active");
	$(".tab li .btn .webfont",obj).html(')');
	$(".tab li:eq("+num+") .btn",obj).addClass("active");
	$(".tab li:eq("+num+") .btn .webfont",obj).html(';');
	$(".tabContents",obj).css({"display":"none"});
	$(".tabContents:eq("+num+")",obj).css({"display":"block"});
}


//spGlobalMenu
//load
$(function(){
	$("#headerSpMenu").css({
		"display":"block",
		"top":"-9999px"
	});
});
function spGlobalMenu(){//$("#localNaviArea").height
	if($("#headerSpMenu").css("top").replace("px","")-0 > 0 && $("#headerSpMenu").css("display") != "none"){
		$("#headerSpMenu").css({
			"display":"block"
		});
		spGlobalMenuClose();
	}else{
		$("#headerMenu").addClass('act');
		$("#headerSpMenu").css({
			"display":"block",
			"top":-$("#localNaviArea").height()-10
		});
		
		//sp menu height set
		var obj = $("#headerSpMenu #globalNaviAreaInner li");
		obj.each(function(iB){
			if(iB < 2 || iB % 2 == 0){return true;}
			if($(obj[iB-1]).height() == $(obj[iB]).height()){
				return true;
			}
			var height = (($(obj[iB-1]).height() > $(obj[iB]).height())?$(obj[iB-1]).height() : $(obj[iB]).height());
			if($(obj[iB-1]).height() > $(obj[iB]).height()){
				height = Math.floor((height - $(obj[iB]).height())/2);
				$("a",$(obj[iB])).css("padding-top",(height+12)+"px");
			}else{
				height = Math.floor((height - $(obj[iB-1]).height())/2);
				$("a",$(obj[iB-1])).css("padding-top",(height+12)+"px");
			}
		});
		
		$("#headerSpMenu").animate({
			top: $("#headerAreaInner").height()-1,
			height: $(document).height()
		}, 300);
	}
}
function spGlobalMenuClose(){
	$("#headerMenu").removeClass('act');
	$("#headerSpMenu").animate({
		height: $("#localNaviArea").height()
	}, 200).animate({
		top: -$("#localNaviArea").height()-10
	}, 300,"",function(){
		//$("#headerSpMenu").css({"display":"none"})
	});
}
$('#localNaviArea a').on('click', function() {
	setTimeout(function(){
		spGlobalMenuClose();
	},600);
});
