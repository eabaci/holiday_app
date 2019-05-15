const Backbone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');

const footerNavViewTemplate = require('../templates/footer-nav-view.html');

let FooterNavView = Backbone.View.extend({
	id: 'footer-nav-view',
	tagName: 'ul',

	template: _.template(footerNavViewTemplate),

	initialize: function() {},

	render: function() {
		return this.$el.html(this.template());
	}
});

module.exports = FooterNavView;
