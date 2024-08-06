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
// Configuración básica de CORS
app.use(cors());

// O, configuración específica
app.use(cors({
  origin: 'http://localhost:8100', // Reemplaza con el origen de tu aplicación Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));


// api routes
app.use('/users',verifyToken, require('./controllers/users.js'));
app.use('/movements',verifyToken,  require('./controllers/movement.js'));
app.use('/auth', require('./controllers/auth.js'));
app.get('/protected', verifyToken, (req, res) => {
  res.status(200).send(`Hello User ${req.userId}`);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

