const net = require('net');
const { SOCKETHOST, SOCKETPORT } = require('../config');

// Crear un cliente TCP
const client = new net.Socket();

module.exports.webSocket = (comando) => {

// Conectar al servidor
client.connect(SOCKETPORT, SOCKETHOST, () => {
    console.log(`Connected to: ${SOCKETHOST}:${SOCKETPORT}`);
    client.write('Hello from Node.js\n');
  });
  
  // Manejar datos recibidos del servidor
  client.on('data', (data) => {
    console.log('Received: ' + data);
    // Cerrar la conexión después de recibir datos
    client.destroy();
  });
  
  // Manejar la desconexión del servidor
  client.on('close', () => {
    console.log('Connection closed');
  });
  
  // Manejar errores
  client.on('error', (err) => {
    console.error('Connection error: ', err);
  });
}