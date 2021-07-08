const Transaccion = require('../models/Transaccion');
require('../mongodb');

exports.obtenerTodasLasTransacciones = (req, res) => {
    res.status(200).send({msg: 'hello'});
}

exports.insertarTransaccion = (req, res) => {
    const { secuencia, detalle, usuario, debe, haber, tipo } = req.body;

    let tipoerror = '';

    if(debe !== haber)
    {
        if(debe > haber)
        {
            tipoerror = 'El valor debe es mayor que el haber';
        }
        else
        {
            tipoerror = 'El valor haber es mayor que el debe';
        }
    }

    const new_transsacion = new Transaccion({
        secuencia,
        detalle,
        usuario,
        debe,
        haber,
        tipo,
        tipoerror
    });

    new_transsacion.save().then( new_transsacion => res.status(200).send(new_transsacion));
    
}