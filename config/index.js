const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});
module.exports = {
    server: {
        PORT: process.env.PORT || 3000
    },
    mongoDB: {
        database: process.env.MONGODB_DATABASE,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD
    },

};

