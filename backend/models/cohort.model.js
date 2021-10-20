const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cohortSchema = new Schema({
    username: {type: String,required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: {type: Date, required: true },
}, {
    timestamps: true,
});

const Cohort = mongoose.model('Cohort', cohortSchema);
module.exports = Cohort;