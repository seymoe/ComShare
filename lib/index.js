'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = require('./config');

/**
* @param url [String] The url will be shared, default current location href.
* @param title [String] The title will be shared, default current document's title.
* @param content [String] The description will be shared, default ''.
* @param pic [String] The image src will be shared, defalt ''
*/

var ComShare = function () {
	function ComShare() {
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, ComShare);

		this.url = config.url || window.location.href;
		this.title = config.title || document.title;
		this.content = config.content || '';
		this.pic = config.pic || '';
		this.init();
	}

	_createClass(ComShare, [{
		key: '_format',
		value: function _format(str) {
			return str === '' ? '' : encodeURIComponent(str);
		}
	}, {
		key: '_replace',
		value: function _replace(api) {
			api = api.replace('{url}', this._format(this.url));
			api = api.replace('{title}', this._format(this.title));
			api = api.replace('{content}', this._format(this.content));
			api = api.replace('{pic}', this._format(this.pic));
			return api;
		}
	}, {
		key: 'init',
		value: function init() {
			var _this = this;

			var _loop = function _loop(key) {
				_this[key] = function () {
					window.open(_this._replace(config[key]));
				};
			};

			for (var key in config) {
				_loop(key);
			}
		}
	}]);

	return ComShare;
}();

module.exports = ComShare;