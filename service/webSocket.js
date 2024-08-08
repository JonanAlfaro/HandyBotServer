const net = require('net');
const { SOCKETHOST, SOCKETPORT } = require('../config');


// Crear un cliente TCP
const client = new net.Socket();

module.exports.webSocket = (comandos) => {

// Conectar al servidor
client.connect(SOCKETPORT, SOCKETHOST, () => {
    console.log(`Connected to: ${SOCKETHOST}:${SOCKETPORT}`);
    client.write(comandos[0])
    // comandos.forEach(element => {
    //     client.write(element);
    // });
    
  });
  
  // Manejar datos recibidos del servidor
  client.on('data', (data) => {
    console.log('Received: ' + data);
    // Cerrar la conexión después de recibir datos
    client.destroy();
  });
  
  // Manejar errores
  client.on('error', (err) => {
    console.error('Connection error: ', err);
  });
}