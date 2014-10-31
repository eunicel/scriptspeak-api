var mongoose = require('mongoose');
var moment = require('moment');

var phraseSchema = mongoose.Schema({
	text: {type: String, required: true},
	date: {type: Date, default: moment()}
});