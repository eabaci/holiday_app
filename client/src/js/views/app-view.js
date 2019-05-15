const Backbone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');

const HeaderView = require('./header-nav-view');
const FooterView = require('./footer-nav-view');
const ListView = require('./list-view');
const Holidays = require('../collections/holidays');

let AppView = Backbone.View.extend({
	el: '#app-view',

	initialize: function() {
		let self = this;

		let header = new HeaderView();
		self.$el.append(header.render());
		let footer = new FooterView();
		self.$el.append(footer.render());

		let holidays = new Holidays();
		holidays.fetch({
			success: function(collection, response) {
				let listView = new ListView({
					collection: collection
				});
				self.$el.append(listView.render());
			},
			error: function(collection, response) {
				throw new Error('Books fetch error');
			}
		});
	}
});

module.exports = AppView;
