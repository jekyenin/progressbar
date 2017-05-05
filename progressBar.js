(function(window, undefined) {
	"use strict";
	var ProgressBar = function(options){
		var _this = this,
			_value = 0,
			_template,
			_parent,
			_elem,
			_hidden = true,
			transitionEvent,
			defaultClasses = {
				outer : 'js_ProgressBar__outer',
				bar : 'js_ProgressBar__bar',
				show : 'js_ProgressBar__show',
				parent : 'js_ProgressBar__parent',
			},
			methods = {
				onCreate: function(){},
				onShow: function(){},
				onHide: function(){},
				onChange: function(){},
				onComplete: function( progressBar, elem ){
					progressBar.hide();
				},
				onEmpty: function( progressBar, elem ){
					progressBar.hide();
				},
			}

		this.show = function(){
			if( !_hidden ){
				return;
			}
			_elem = _template.cloneNode(true);
			_parent.appendChild(_elem);
			_this.value( _value );

			_elem.addEventListener(transitionEvent, function showAdd(){

				_hidden = false;
				if( methods.onShow ){
					methods.onShow( _this, _elem );
				}

				_elem.removeEventListener(transitionEvent, showAdd)

			}, false);

			setTimeout(function(){

				_elem.classList.add(defaultClasses.show);

			}, 20);

			return _this;
		};
		this.hide = function(){
			if( _hidden ){
				return;
			}

			_elem.addEventListener(transitionEvent, function hideRemove(){

				_parent.removeChild(_elem);
				if( methods.onHide ){
					methods.onHide( _this, _elem );
				}
				_hidden = true;

				_elem.removeEventListener(transitionEvent, hideRemove)

			}, false);

			_elem.classList.remove(defaultClasses.show);
			return _this;
		};
		this.value = function(val){

			if( typeof val != 'number' || val === undefined ){
				return _value;
			}

			setValue( val );

			_elem.querySelector('.' + defaultClasses.bar).style.width = _value + '%';

			if( methods.onChange ){
				methods.onChange( _this, _elem );
			}

			return _this;
		};
		function whichTransitionEvent(){
			var evt,
			element = document.createElement("div");

			var animations = {
				"transition"      : "transitionend",
				"OTransition"     : "oTransitionEnd",
				"MozTransition"   : "transitionend",
				"WebkitTransition": "webkitTransitionEnd"
			}

			for (evt in animations){
				if (element.style[evt] !== undefined){
					return animations[evt];
				}
			}
		}
		
		function setValue(val){
			if( val > 100 ){
			
				_value = 100;
			
				if( methods.onComplete ){
					methods.onComplete( _this, _elem );
				}
			
				return;
			}
			
			if ( val < 0 ){
			
				_value = 0;
			
				if( methods.onEmpty ){
					methods.onEmpty( _this, _elem );
				}
			
				return;
			}

			_value = val;
		}
		
		function create(options){
			var outer = document.createElement('div'),
				bar = outer.cloneNode();

			outer.classList.add(defaultClasses.outer);
			bar.classList.add(defaultClasses.bar);
			outer.appendChild(bar);

			_parent = document.querySelector( options.place );
			if( methods.onCreate ){
				methods.onCreate( _this, _elem );
			}

			_template = outer;

			transitionEvent = whichTransitionEvent();
		}

		create(options);
	}

	window.ProgressBar = ProgressBar;
})(window);
