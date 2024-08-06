const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret } = require('../config');
const userService = require('../service/users');

router.post('/login', login);
router.post('/register', register);
module.exports = router;

function login(req, res, next) {
    
    const { email, password } = req.body;
    const result  = userService.findOneEmail(email);
    result.then(function (user) {
        if (!user) {
            return res.send('el usuario no se encontro').status(500);
          }
          const passwordIsValid = bcrypt.compareSync(password, user.password);
          if (!passwordIsValid) {
            return res.send('password invalida').status(500);
          }
          const token = jwt.sign({ id: user.email }, secret, { expiresIn: 86400 });
          const nombre = user.nombre;
          const idAdmin = user.idAdmin;
          return res.send({ auth: true, token ,idAdmin ,nombre}).status(200);
          
    });
}

function register (req, res, next) {
       userService.createUsuario(req.body)
      .then((data) => res.send(data).status(200))
      .catch((res) =>res.send("Hubo un problema al guardar el registro").status(500));
};




