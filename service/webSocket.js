const net = require('net');
const { SOCKETHOST, SOCKETPORT } = require('../config');


// Crear un cliente TCP
const client = new net.Socket();

module.exports.webSocket = (comandos) => {

// Conectar al servidor
client.connect(SOCKETPORT, SOCKETHOST, () => {
    console.log(`Connected to: ${SOCKETHOST}:${SOCKETPORT}`);
    comandos.forEach(element => {
        console.log(element);
        client.write(element);
    });
    
  });
  
  // Manejar datos recibidos del servidor
  client.on('data', (data) => {
    console.log('Received: ' + data);
    // Cerrar la conexión después de recibir datos
    client.destroy();
  });

  this.client.on('close', () => {
    console.log('Connection closed');
  });

  this.client.on('error', (err) => {
    console.error('Connection error: ', err);
  });

  module.exports.webSocketdisconnect =  () => {
    this.client.end();
  }
}
