const db = require('../db.js')
const movimientos = "movimientos";

module.exports.movimientos = async () => {
  const collection = await db.collection(movimientos);
  const results = await collection.find({}).toArray();;
  return results;
};

module.exports.findOneMovimientos = async (id) => {
  const collection = await db.collection(movimientos);
  const query = { _id: new ObjectId(id) };
  const results = await collection.findOne(query);
  return results;
}

module.exports.createMovimientos = async (params) => {

  let newUsuario = {
    descripcion: params.escripcion,
    comandos: params.comandos,
    idAdmin: params.idAdmin,
    creadoPor :params.creadoPor
  };

  const collection = await db.collection(movimientos);
  const result = await collection.insertOne(newUsuario);
  return result;
}