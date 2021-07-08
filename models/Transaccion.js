const { model, Schema } = require('mongoose');

const transaccionSchema = new Schema({
  secuencia: String,
  detalle: String,
  usuario: String,
  debe: Number,
  haber: Number,
  tipo: String,
  tipoerror: String,
});
  
const Transaccion = model('Transaccion', transaccionSchema);

module.exports = Transaccion;