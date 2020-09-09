$(window).load(function(){
	var name = $("td.name");
	var tempname = [], tempdating = [];
	var odd=0,even=0,i=0,tr=0;
	$( "span.title" ).each(function( index ) {
		tempname[odd] = $(this).text();
		odd++
	});
	$( "span.subDating" ).each(function( index ) {
		/* we are odd */
		tempdating[even] = $(this).text();
		even++
	});
	$("tr.spHead th").each(function( index ) {
		$(this).html(tempname[tr]+'<span class="dating">'+tempdating[tr]+'</span>');
		tr++;
	});
});