const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    shortid: {
        type: String,
        unique: true,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    visitHistory: [{timestamp: {type: Number} }]
}, {timestamps: true})

const URL = mongoose.model('url', UrlSchema);

module.exports = {
    URL
}