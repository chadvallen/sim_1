const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err=> {
    console.error('Error on MASSIVE -->', err)
})




SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT} 🎃`)
})