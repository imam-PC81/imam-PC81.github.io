window.isMenuReady = false;

var locationPathName = location.pathname;

var CURRENT_DIR = (/^\/ir/.test(locationPathName))? "IR_DIR" : "KOJIN_DIR";

var KOJIN_DIR_LIST = [
	'/personal/atm/',
	'/personal/account/',
	'/personal/netbank/',
	' ',
	'/personal/support/',
	'/intlcard/'
];

var IR_DIR_LIST = [
	'/ir/news/',
	'/ir/management/',
	'/ir/finance/',
	'/ir/library/',
	'/ir/stock/',
	'/ir/digest/'
];

var MENU_DIR_LIST = (CURRENT_DIR == "IR_DIR")? IR_DIR_LIST : KOJIN_DIR_LIST;

var ACTIVE_CLASSNAME = 'active';

var ICON_LIST = [
	'/shared/img/sp_drawer_ico_003.png',
	'/shared/img/sp_drawer_ico_015.png',
	'/shared/img/sp_drawer_ico_004.png',
	'/shared/img/sp_drawer_ico_005.png'
];

(function($){
  'use strict';
  $(document).ready(function(){
    if (!window.isMenuReady){
      $.initMenu();
      window.isMenuReady = true;
    };
  });
})(jQuery);

!function(_win, _j){
	_j.fn.extend({
		rollover: function(){
			var _check = new RegExp('_on' + '\\.\\w+$');
			return this.each(function(){
				var _target = _j(this);
				var _src = _target.attr('src');
				if (_check.test(_src)) return;
				var _on = _src.replace(/\.\w+$/, '_on' + '$&');
				if( !_target.hasClass(ACTIVE_CLASSNAME) ){
					_target.hover(
						function() {
							_target.attr('src', _on);
						},
						function() {
							_target.attr('src', _src);
						}
					);
				};
			});
		},
		setDefaultMenu: function(){
			var _target = _j(this).children();
			_target = _j( _j(_target[0]).find('img'));
			if( _target.prop('img-src') && !_target.hasClass(ACTIVE_CLASSNAME) ){
				_target.attr('src', _target.prop('img-src'));
			};
		},
		setActiveMenu: function(){
			var _check = new RegExp('_on' + '\\.\\w+$');
			var _target = _j(this).children();
			_target = _j( _j(_target[0]).find('img'));
			_target.prop('img-src', _target.attr('src'));
			if (_check.test( _target.prop('img-src') )) return;
			var _on = _target.prop('img-src').replace(/\.\w+$/, '_on' + '$&');
			if( !_target.hasClass(ACTIVE_CLASSNAME) ){
				_target.attr('src', _on);
			};
		}
	});
	_j.extend({
		spMenuSlideIn: function(){
			if( _j('body').hasClass('slideOut') ) _j('body').removeClass('slideOut');
			if( !_j('body').hasClass('slideIn') ) _j('body').addClass('slideIn');
			_j('#spMenuArea').show();
		},
		spMenuSlideOut: function(){
			if( _j('body').hasClass('slideIn') ) _j('body').removeClass('slideIn');
			if( !_j('body').hasClass('slideOut') ) _j('body').addClass('slideOut');
			setTimeout(function(){
				_j('#spMenuArea').hide();
			}, 300);
		},
		changeSpSubMenu: function(_this, _type){
			var _target = _this.next();
			var _img = _j( _this.find('span')[0] );
			var _src;
			switch(_this.prop('mode')){
				case 'close':
					_target.stop().slideDown();
					_this.prop('mode', 'open');
					break;
				case 'open':
					_target.stop().slideUp();
					_this.prop('mode', 'close');
					break;
			};
			switch(_type){
				case 0:
					switch(_this.prop('mode')){
						case 'close':
							_src = ICON_LIST[0];
							break;
						case 'open':
							_src = ICON_LIST[1];
							break;
					};
					break;
				case 1:
					switch(_this.prop('mode')){
						case 'close':
							_src = ICON_LIST[2];
							break;
						case 'open':
							_src = ICON_LIST[3];
							break;
					};
					break;
			};
			_img.css('background-image', 'url('+_src+')');
		},
		setSPmenu: function(){
			var _menu = _j('#spMenuArea');
			_j('#drawerMenu').on({
				'click': function(){
					_j.spMenuSlideIn();
					return false;
				}
			});
			_j('#closeBtnTop').on({
				'click': function(){
					_j.spMenuSlideOut();
					return false;
				}
			});
			_j('#closeBtnBtm').on({
				'click': function(){
					_j.spMenuSlideOut();
					return false;
				}
			});
			_j('.spLv01 > li > a').each(function(_index){
				if((CURRENT_DIR == "KOJIN_DIR" && (_index === 0 || _index === 1)) || (CURRENT_DIR == "IR_DIR" && (_index === 1 || _index === 2))){
					_j(this).prop('mode', 'close');
					_j(this).on({
						'click': function(){
							_j.changeSpSubMenu( _j(this), 0 );
							return false;
						}
					});
				};
			});
			_j('.spLv02 > li > a').each(function(_index){
				if(!_j(this).parents('li').hasClass('normalLink')){
					_j(this).prop('mode', 'close');
					_j(this).on({
						'click': function(){
							_j.changeSpSubMenu( _j(this), 1 );
							return false;
						}
					});
				}
			});
			_j('.spLv01 > li > ul').hide();
			_j('.spLv02 > li > ul').hide();
			_menu.css('min-height', _j('body').height());
			_menu.prepend('<div id="closeCover"></div>');
			var _closeCover = _j('#closeCover');
			//_closeCover.height( _j(_win).height() );
			if( _j.isTapEvent ){
				_closeCover.on({
					'touchend': function(){
						_j.spMenuSlideOut();
						return false;
					}
				});
			}else{
				_closeCover.on({
					'click': function(){
						_j.spMenuSlideOut();
						return false;
					}
				});
			};
		},
		initMenu: function(){

			_j.isTapEvent = ('ontouchstart' in _win);

			var ResponsiveMode = _j.cookie('Responsive');
			var _href = _win.location.href;
			var _currentIndex;
			var _menuWrap;
			_j.currentWrap;
			_j.currentMenu;
			for( var i=0; i<MENU_DIR_LIST.length; i++ ){
				if( _href.indexOf(MENU_DIR_LIST[i]) !== -1 ){
					_currentIndex = i;
				};
			};
			if(CURRENT_DIR == "KOJIN_DIR" && _href.indexOf(MENU_DIR_LIST[5]) !== -1 ){
				_currentIndex = 0;
			};
			if(
				ResponsiveMode === 'SP'
			){
				_j.setSPmenu();
			}else{
				//_isTapEvent = false;
				_j('#megaMenuArea > ul > li').each(function(_index){
					_menuWrap = _j(this).find('.menuWrap');
					_menuWrap.prop('mode', 'hide');
					_menuWrap.prop('index', _index);
					if(_j.isTapEvent){
						_j(this).on({
							'click': function(e){
								_menuWrap = _j(this).find('.menuWrap');
								if( _menuWrap.prop('mode') === 'hide' ){
									if( _j.currentWrap ){
										_j.currentWrap.hide();
										_j.currentWrap.prop('mode', 'hide');
									};
									if( _j.currentMenu ){
										_j.currentMenu.setDefaultMenu();
									};
									_menuWrap.show();
									_j.currentWrap = _menuWrap;
									_j.currentMenu = _j(this);
									_j.currentMenu.setActiveMenu();
									_menuWrap.prop('mode', 'show');
								}else{
									_menuWrap.hide();
									_menuWrap.prop('mode', 'hide');
									_j.currentMenu.setDefaultMenu();
								};
								if($(e.target).closest('.menuWrap').length === 0) {
									return false;
								}
							}
						});
					}else{
						_j(this).on({
							'mouseleave': function(){
								_menuWrap = _j(this).find('.menuWrap');
								_menuWrap.hide();
								_menuWrap.prop('mode', 'hide');
							},
							'mouseenter': function(){
								_menuWrap = _j(this).find('.menuWrap');
								if( _j.currentWrap ){
									_j.currentWrap.hide();
									_j.currentWrap.prop('mode', 'hide');
								};
								_menuWrap.show();
								_menuWrap.prop('mode', 'show');
								_j.currentWrap = _menuWrap;
							}
						});
					};
					if( _index === _currentIndex ){
						var _img = _j(this).children();
						_img = _j( _j(_img[0]).find('img'));
						var _src = _img.attr('src');
						var _on = _src.replace(/\.\w+$/, '_on' + '$&');
						_img.attr('src', _on);
						_img.addClass(ACTIVE_CLASSNAME);
					};
				});
				if(_j.isTapEvent){

				}else{
					_j('#megaMenuArea > ul > li > a > img').rollover();
				};
			};
		}
	});
}(window, jQuery);