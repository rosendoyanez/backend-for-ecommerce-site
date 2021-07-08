const mongoose = require('mongoose');
let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true
    
};
const connectWithRetry = () => {
    console.log('Intentando conexión a mongodb')
    mongoose.connect("mongodb://localhost:27017/prueba-cloud-district-RY", options).then(()=>{
        console.log('Conectado a mongoDB')
    }).catch(err=>{
        console.log('No se pudo conectar mongoDB, lo voy a intentar en 5 segundos. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;
