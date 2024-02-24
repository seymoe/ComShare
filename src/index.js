const config = require('./config')

/**
* @param url [String] The url will be shared, default current location href.
* @param title [String] The title will be shared, default current document's title.
* @param content [String] The description will be shared, default ''.
* @param pic [String] The image src will be shared, defalt ''
*/

class ComShare {
	constructor(config = {}) {
		this.url = config.url || window.location.href
		this.title = config.title || document.title
		this.content = config.content || ''
		this.pic = config.pic || ''
		this.init()
	}

	_format(str) {
		return (str === '') ? '' : encodeURIComponent(str)
	}

	_replace(api) {
		api = api.replace('{url}', this._format(this.url))
        api = api.replace('{title}', this._format(this.title))
        api = api.replace('{content}', this._format(this.content))
        api = api.replace('{pic}', this._format(this.pic))
        return api
	}

	init() {
		for (let key in config) {
			this[key] = () => {
				window.open(this._replace(config[key]))
			}
		}
	}
}

module.exports = ComShare

