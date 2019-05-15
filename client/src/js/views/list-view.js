const Backbone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');

const ListItemView = require('./list-item-view');

let ListView = Backbone.View.extend({
	className: 'list-view-container',
	tagName: 'div',

	initialize: function(ops) {
		this.collection = ops.collection;
	},

	render: function() {
		let self = this;

		self.collection.forEach(element => {
			let listItemView = new ListItemView({ model: element });
			self.$el.append(listItemView.render());
		});

		return self.$el;
	}
});

module.exports = ListView;
