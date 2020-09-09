/*------------------------------------------------------------------------------------------------
creation date 2009.9.14
http://www.sevenbank.co.jp/
Copyright (C) Seven Bank,Ltd. All Rights Reserved.
------------------------------------------------------------------------------------------------*/
(function() {
    var jsfiles = [
									 "../../../../shared/js/jquery-1.3.2.min.js",
									 "../../../../shared/js/shared.js",
									 "../../../../shared/js/addclass.js",
									 "../../../../shared/js/popup.js",
									 "../../../../script/hedge.js",
									 "../../../../script/hedge0001.js",
									 "../../../../script/hedge0009.js",
									 "../../../../script/hedge7405.js",
									 "../../../../script/hedgesk.js",
									 "tableres.js",
 									 "../../../../script/bank.js",//for slogOpen,printOpen,atmOpen
 									 "../../../../script/swap.js"//for winOpen(FAQ)
									 ];
    
    function lastof(es)    { return es[es.length - 1]; }
    function dirname(path) { return path.substring(0, path.lastIndexOf('/')); }
    var prefix = dirname(lastof(document.getElementsByTagName('script')).src);
    for(var i = 0; i < jsfiles.length; i++) {
        document.write('<script type="text/javascript" src="' + prefix + '/' + jsfiles[i] + '" charset="Shift_JIS"></script>');
    }
}).call(this);