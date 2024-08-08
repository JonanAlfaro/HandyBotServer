const express = require('express');
const router = express.Router();

const userService = require('../service/movement');

router.post('/', playMovimientos);
module.exports = router;

function playMovimientos(req, res, next) {
    try{
        const result = userService.playMovimientos(req.body);
        return res.send(result).status(200);
    }catch{
        res.send("hubo un error al usar el webSocket").status(500);
    }
}

