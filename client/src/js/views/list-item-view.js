const Backbone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');

const listItemViewTemplate = require('../templates/list-item-view.html');

let ListItemView = Backbone.View.extend({
	className: 'list-item-view-container',
	tagName: 'div',

	template: _.template(listItemViewTemplate),

	initialize: function(ops) {
		this.model = ops.model;
	},

	render: function() {
		return this.$el.html(this.template(this.model.toJSON()));
	}
});

module.exports = ListItemView;
