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
    const result = userService.findOneUsuarios(req.params.id);
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



// const Joi = require('joi');
// const validateRequest = require('_middleware/validate-request');
// const Role = require('_helpers/role');

// router.post('/', createSchema, create);
// router.put('/:id', updateSchema, update);
// router.delete('/:id', _delete);

// function create(req, res, next) {
//     userService.create(req.body)
//         .then(() => res.json({ message: 'User created' }))
//         .catch(next);
// }

// function update(req, res, next) {
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({ message: 'User updated' }))
//         .catch(next);
// }

// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({ message: 'User deleted' }))
//         .catch(next);
// }