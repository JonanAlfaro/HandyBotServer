const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret } = require('../config');
const userService = require('../service/users');

router.post('/login', login);

module.exports = router;

function login(req, res, next) {
    
    const { email, password } = req.body;
    const result  = userService.findOneEmail(email);
    result.then(function (user) {
        if (!user) {
            return res.send('el usuario no se encontro').status(404);
          }
          const passwordIsValid = bcrypt.compareSync(password, user.password);
          if (!passwordIsValid) {
            return res.send('password invalida').status(401);
          }
          const token = jwt.sign({ id: user.email }, secret, { expiresIn: 86400 });
          return res.send({ auth: true, token }).status(200);
          
    });
}
   


