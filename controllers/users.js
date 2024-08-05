const express = require('express');
const router = express.Router();

const userService = require('../service/users');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);

module.exports = router;

function getAll(req, res, next) {
    const result = userService.usuarios();
    result.then(function (data) {
        res.send(data).status(200);
    });
}

function getById(req, res, next) {
    const result = userService.findOneID(req.params.id);
    result.then(function (data) {
        res.send(result).status(200);
    }).catch(
        res.send("Not found").status(404)
    );
}

function create(req, res, next) {
      console.log(req.body)
         userService.createUsuario(req.body)
        .then((data) => res.send(data).status(200))
        .catch(next);
}


