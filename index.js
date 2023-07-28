const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const ColorsRouter = require('./src/routes/colors')
const {server} = require('./config/index')
const cors = require('cors')

dotenv.config({})

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json());

app.use("/apis/colors", ColorsRouter);


app.listen(server.PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", server.PORT);
})