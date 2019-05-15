const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const Holiday = require('./holiday');

const API_PORT = 8080;
const app = express();
const router = express.Router();

// MongoDB-Datenbank
const dbRoute = 'mongodb://localhost:27017/holidayapi';

// verbindet unseren Backend-Code mit der Datenbank
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// prüft, ob die Verbindung zur Datenbank erfolgreich ist
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) nur für das Logging und
// bodyParser, parst den Request-Body in ein lesbares Json-Format
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Die get Methode
// Diese Methode ruft alle verfügbaren Daten in unserer Datenbank ab
router.get('/getHoliday', async (req, res) => {
	Holiday.find((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json(data);
	});
});

// Die update Methode
// Diese Methode überschreibt vorhandene Daten in unserer Datenbank
router.put('/getHoliday/:id', (req, res) => {
	const id = req.params.id;
	const { title, description, imageUrl, added, amount, amountSum } = req.body;

	Holiday.findByIdAndUpdate(
		id,
		{ title, description, imageUrl, added, amount, amountSum },
		err => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		}
	);
});

// Die delete Methode
// Diese Methode entfernt vorhandene Daten in unserer Datenbank
router.delete('/getHoliday/:id', (req, res) => {
	let id = req.params.id;
	Holiday.findByIdAndDelete(id, err => {
		if (err) return res.send(err);
		return res.json({ success: true });
	});
});

// Die create Methode
// Diese Methode fügt neue Daten in unsere Datenbank ein
router.post('/getHoliday/', (req, res) => {
	let holiday = new Holiday();
	const { title, description, imageUrl, added, amount, amountSum } = req.body;
	if (!description || !imageUrl || !title) {
		return res.json({
			success: false,
			error: 'INVALID INPUTS'
		});
	}
	holiday.imageUrl = imageUrl;
	holiday.description = description;
	holiday.title = title;
	holiday.added = added;
	holiday.amount = amount;
	holiday.amountSum = amountSum;

	holiday.save((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

// Fügen Sie /api für unsere http-Anfragen hinzu
app.use('/api', router);

// Startet das Backend in diesem PORT
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
