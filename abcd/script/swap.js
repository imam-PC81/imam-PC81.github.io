//���������������火�������摜�X���b�v��������



function MM_swapImgRestore() { //v3.0



var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;



}



function MM_preloadImages() { //v3.0



var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();



var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)



if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}



}



function MM_findObj(n, d) { //v4.01



var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {



d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}



if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];



for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);



if(!x && d.getElementById) x=d.getElementById(n); return x;



}



function MM_swapImage() { //v3.0



var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)



if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}



}



//�������������܂Ł��������摜�X���b�v��������











//��������������g�b�v������{�^���p������



// �ݒ�J�n�i�g�p����摜��ݒ肵�Ă��������j



if (document.images) {







// �摜1



var img1on = new Image();



img1on.src = "/img/btn_lang02_ro.gif"; // �|�C���g���̉摜



var img1off = new Image();



img1off.src = "/img/btn_lang02.gif"; // �ʏ�̉摜







// �摜2



var img2on = new Image();



img2on.src = "/img/btn_lang03_ro.gif";



var img2off = new Image();



img2off.src = "/img/btn_lang03.gif";







// �摜3



var img3on = new Image();



img3on.src = "/img/btn_lang04_ro.gif";



var img3off = new Image();



img3off.src = "/img/btn_lang04.gif";







// �摜4



var img4on = new Image();



img4on.src = "/img/btn_lang05_ro.gif";



var img4off = new Image();



img4off.src = "/img/btn_lang05.gif";







// �摜5



var img5on = new Image();



img5on.src = "/img/btn_lang06_ro.gif";



var img5off = new Image();



img5off.src = "/img/btn_lang06.gif";







// �ݒ�I��











}







//�������������瑽����{�^���p�i�g�b�v�ȊO�Ŏg�p����ꍇ�j������



// �ݒ�J�n�i�g�p����摜��ݒ肵�Ă��������j



if (document.images) {







// �摜1



var img1on = new Image();



img1on.src = "/img/btn_lang02_ro.gif"; // �|�C���g���̉摜



var img1off = new Image();



img1off.src = "/img/btn_lang02.gif"; // �ʏ�̉摜







// �摜2



var img2on = new Image();



img2on.src = "/img/btn_lang03_ro.gif";



var img2off = new Image();



img2off.src = "/img/btn_lang03.gif";







// �摜3



var img3on = new Image();



img3on.src = "/img/btn_lang04_ro.gif";



var img3off = new Image();



img3off.src = "/img/btn_lang04.gif";







// �摜4



var img4on = new Image();



img4on.src = "/img/btn_lang05_ro.gif";



var img4off = new Image();



img4off.src = "/img/btn_lang05.gif";







// �摜5



var img5on = new Image();



img5on.src = "/img/btn_lang06_ro.gif";



var img5off = new Image();



img5off.src = "/img/btn_lang06.gif";







// �摜6



var img6on = new Image();



img6on.src = "/img/btn_lang07_ro.gif";



var img6off = new Image();



img6off.src = "/img/btn_lang07.gif";









// �ݒ�I��











}



















// �|�C���g���̏���



function On(name) {







if (document.images) {



document.images[name].src = eval(name + 'on.src');



}







}







// ���������̏���



function Off(name) {







if (document.images) {



document.images[name].src = eval(name + 'off.src');



}







} 



//�����������܂Ńg�b�v������{�^���p������







//���������������火�������E�B���h�E�I�[�v����������







function WinOpen(url,wname,width,height,tool,loca,directories,status,menubar,scrollbars,resizable){



if(wname==("faq")){//faq�y�[�W



/*   







var pt="";



//�ǂ̃J�e�S���ɑ����邩����



   var cate=location.pathname.split(location.pathname.match(/\/atm\/|\/account\/|\/about\/|\/netbank\/|\/inquiry\/|\/site\//));



//���K�w�ڂɂ��邩���ׂ�



   if(cate[1]){



      for(i=0; i<=cate[1].split("/").length-1; i++){



	      pt+="../";



      }



   }







*/







//�����N��url���Ȃ��č쐬



	url=url; width=780; height=800; tool=1; status=1; scrollbars=1; menubar=1; loca=1;



}else if(wname==("acc")){



   var pt="";



//�ǂ̃J�e�S���ɑ����邩����



   var cate=location.pathname.split("/account/");



//���K�w�ڂɂ��邩���ׂ�



   for(i=0; i<=cate[1].split("/").length-1; i++){



	   pt+="../";



   }url=pt+"/account/"+url;



}else if(wname==("tenpo")){//faq�y�[�W



   var pt="";



//�ǂ̃J�e�S���ɑ����邩����



   var cate=location.pathname.split(location.pathname.match(/\/atm\/|\/account\/|\/about\/|\/netbank\/|\/inquiry\/|\/site\//));



//���K�w�ڂɂ��邩���ׂ�



   if(cate[1]){



      for(i=0; i<=cate[1].split("/").length-1; i++){



	      pt+="../";



      }



   }



//�����N��url���Ȃ��č쐬



	url=pt+"tenpo/"+url; width=645; height=520; tool=1; status=1; scrollbars=1; menubar=1; loca=1;



}else{



//�f�t�H���g



  if(isNaN(tool)){ tool=0;}//toolbar�̏����l0�A�l������΃Z�b�g



  if(isNaN(loca)){ loca=0;}//loca����



  if(isNaN(directories)){ directories=0;}//directories����



  if(isNaN(status)){ status=0;}//status����



  if(isNaN(menubar)){ menubar=0;}//menubar����



  if(isNaN(scrollbars)){ scrollbars=0;}//scrollbars����



  if(isNaN(resizable)){ resizable=0;}//resizable����



}



//�E�B���h�E�ɖ��O��t���A�t�H�[�J�X



this[wname]=window.open(url,wname,"toolbar="+tool+",location="+loca+",directories="+directories+",status="+status+",menubar="+menubar+",scrollbars="+scrollbars+",resizable="+resizable+",width="+width+",height="+height);



this[wname].focus();



}



//�������������܂Ł��������E�B���h�E�I�[�v����������







function MM_jumpMenu(targ,selObj,restore){ //v3.0



eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");



if (restore) selObj.selectedIndex=0;



}



function jump(url){



document.location.href=url;



}







//���������������火������flash�v���O�C���̔��聫������



var MM_contentVersion=5; var MM_FlashCanPlay;



var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;







if ( plugin && !((location.pathname.match(/\/netbank\//) || location.pathname.match(/sitemap.html/)) && navigator.userAgent.indexOf("MSIE 5.23")>=0 && navigator.userAgent.indexOf("Mac")>=0)) {



var words = navigator.plugins["Shockwave Flash"].description.split(" ");



for (var i = 0; i < words.length; ++i){



if (isNaN(parseInt(words[i])))



continue;



var MM_PluginVersion = words[i];



}



MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;



}else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1)){



document.write('<SCR' + 'IPT LANGUAGE=VBScript\>\n');



document.write('on error resume next \n');



document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');



document.write('</SCR' + 'IPT\> \n');



}



//�������������܂Ł�������flash�v���O�C���̔��聪������







//���������������火������flash�o�i�[�\����������



function swf_banner(){



if(MM_FlashCanPlay){



var cate=location.pathname.substr(1,(location.pathname.indexOf("/",1)-1));



var swf_obj={account:"account_swf.swf",atm:"account_swf.swf",about:"account_swf.swf",netbank:"account_swf.swf",normal:"account_swf.swf"};



if(eval("swf_obj.account")){



document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="718" height="31">');



document.write('<param name="movie" value="/cmnimg/'+eval("swf_obj.account")+'"><param name="quality" value="high">');



document.write('<embed src="/cmnimg/'+eval("swf_obj.account")+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="718" height="31"></embed></object>');



}



}else{



}



}



//�������������܂Ł�������flash�o�i�[�\����������







function iptfocus(fn,bn){



eval("document."+fn+"."+bn).value="";



}