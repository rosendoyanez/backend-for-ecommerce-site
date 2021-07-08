const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;


const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    iva: String,
    precio: {subTotal: Number, valorIva: Number, total: Number, precioConFormato: String},
   
});

productoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
productoSchema.set('toJSON', {
    virtuals: true
});

productoSchema.findById = function (cb) {
    return this.model('Producto').find({id: this.id}, cb);
};

productoSchema.buscarProducto = function (cb) {
    return this.model('Producto').find({"nombre": this.nombre}, cb);
};

const Producto = mongoose.model('Producto', productoSchema);


exports.buscarProducto = (nombre) => {
    return Producto.find({"nombre": nombre})
        .then((result) => {
            const error = {"error": "true", "mensaje": "No hay productos encontrados"}
            return  result.length === 0 ? error : result 
            
        });
};


exports.findById = (id) => {
    return Producto.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.crearProducto = (productoData) => {
    const producto = new Producto(productoData);
    return  producto.save();

};



exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Producto.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, productos) {
                if (err) {
                    reject(err);
                } else {
                    resolve(productos);
                }
            })
    });
};


exports.removeById = (productoId) => {
    return new Promise((resolve, reject) => {
        Producto.deleteMany({_id: productoId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

