const Backbone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');

const headerNavViewTemplate = require('../templates/header-nav-view.html');

let HeaderNavView = Backbone.View.extend({
	id: 'header-nav-view',
	tagName: 'ul',

	template: _.template(headerNavViewTemplate),

	initialize: function() {},

	render: function() {
		return this.$el.html(this.template());
	}
});

module.exports = HeaderNavView;
