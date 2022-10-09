const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Times = new Schema({
 
    day: {
        type: String
    },

    hourStarted: {
        type: String
    },

    hourEnded: {
        type: String
    },

    totalHours: {
        type: Number
    }
})

const model = mongoose.model('Time', Times)

module.exports = model