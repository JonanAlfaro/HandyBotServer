const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const { PORT } = require ("./config.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// api routes
app.use('/users', require('./controllers/users.js'));
app.use('/movements', require('./controllers/movement.js'));



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

