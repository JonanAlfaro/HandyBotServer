const express = require('express');
const router = express.Router();

const userService = require('../service/movement');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);

module.exports = router;

function getAll(req, res, next) {
    const result = userService.movimientos();
    result.then(function (data) {
        res.send(data).status(200);
    });
}

function getById(req, res, next) {
    const result = userService.findOneMovimientos(req.params.id);
    result.then(function (data) {
        res.send(result).status(200);
    }).catch(
        res.send("Not found").status(404)
    );
}

function create(req, res, next) {
      console.log(req.body)
         userService.createMovimientos(req.body)
        .then((data) => res.send(data))
        .catch(next);
}
