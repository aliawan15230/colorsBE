const mongoose = require('mongoose');
const {mongoDB} = require('../../config');

mongoose.connect(
    `mongodb+srv://${mongoDB.username}:${mongoDB.password}@${mongoDB.database}.u7wlu.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }).then(res => {
    console.log('mongodb connected')
})
    .catch(error => {
        console.log('Cannot Connect To Mongo Database!', error);
    });

const ColorsModel = require('./Colors');

module.exports = {
    ColorsModel
}
