const express = require('express');
const {obtenerTodasLasTransacciones, insertarTransaccion} = require('../controllers/transaccion.controller');

const router = express.Router();

router.get('/', obtenerTodasLasTransacciones);

router.post('/', insertarTransaccion);

module.exports = router;
