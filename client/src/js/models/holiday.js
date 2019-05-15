const Backbone = require('backbone');

let Holiday = Backbone.Model.extend({
	defaults: {
		place: '',
		date: '',
		stars: ''
	},

	idAttribute: '_id',

	urlRoot: 'http://localhost:8080/api/getHoliday'
});

module.exports = Holiday;
