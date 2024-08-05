const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const verifyToken = require('./middleware/auth');
const cors = require('cors')

const { PORT } = require ("./config.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);



// api routes
app.use('/users',verifyToken, require('./controllers/users.js'));
app.use('/movements',verifyToken, require('./controllers/movement.js'));
app.use('/auth', require('./controllers/auth.js'));
app.get('/protected', verifyToken, (req, res) => {
  res.status(200).send(`Hello User ${req.userId}`);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

