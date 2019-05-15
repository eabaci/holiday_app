const Backbone = require('backbone');
const Holiday = require('../models/holiday');

let Holidays = Backbone.Collection.extend({
	model: Holiday,
	url: 'http://localhost:8080/api/getHoliday'
});

module.exports = Holidays;
