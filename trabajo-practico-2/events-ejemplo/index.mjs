import { EventEmitter } from 'events';

// Crear una instacia de EventEmitter
const emisor = new EventEmitter();

// Definir un evento personalizado
emisor.on('saludo',(nombre) => {
    console.log(`¡Hola ${nombre}!`);
});

// Emitir el evento del saludo
emisor.emit('saludo','Mundo')