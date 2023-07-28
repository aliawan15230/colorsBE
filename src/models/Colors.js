const mongoose = require('mongoose');

const colorsSchema = new mongoose.Schema({

        title: {
            type: String,
            required: true
        },
        colorVariants: {
            type: Array,
            default: []
        },
        colorNumbers: {
            type: Number,
            default: 0
        }
    }, {
        timestamps: true
    }
);

const Colors = mongoose.model('colors', colorsSchema);

module.exports = Colors;
