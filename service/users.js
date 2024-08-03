const db = require('../db.js')
const bcrypt = require('bcryptjs');
const usuarios = "usuarios";

module.exports.usuarios = async () => {
  const collection = await db.collection(usuarios);
  const results = await collection.find({}).toArray();;
  return results;
};

module.exports.findOneUsuarios = async (id) => {
  const collection = await db.collection(usuarios);
  const query = { _id: new ObjectId(id) };
  const results = await collection.findOne(query);
  return results;
}

module.exports.createUsuario = async (params) => {

  let newUsuario = {
    nombre: params.nombre,
    email: params.email,
    idAdmin: params.idAdmin,
    password :await bcrypt.hash(params.password, 10)
  };

  if (await db.collection(usuarios).findOne({ where: { email: params.email } })) {
      throw 'Email "' + params.email + '" ya fue registrado';
  }

  const collection = await db.collection(usuarios);
  const result = await collection.insertOne(newUsuario);
  return result;
}