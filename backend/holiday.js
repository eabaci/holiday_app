// /backend/offer.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// HolidaySchema wird die Datenstruktur unserer Datenbank sein
const HolidaySchema = new Schema(
	{
		place: String,
		date: Date,
		stars: Number
	},
	{ timestamps: false }
);

// Exportieren des neuen HolidaySchema
module.exports = mongoose.model('Holiday', HolidaySchema);
