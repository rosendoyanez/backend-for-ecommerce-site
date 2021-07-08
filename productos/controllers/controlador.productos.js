const ModeloProducto = require('../models/modelo.producto');
const Helper = require('../../common/helper/configuracion.producto');

exports.insert = (req, res) => {
 
    if(Helper.validarProducto(req.body).error) {
        res.status(400).send(Helper.validarProducto(req.body));
    }else {
        ModeloProducto.crearProducto(Helper.crearObjeto(req.body))
        .then((result) => {
            res.status(201).send({id: result._id, mensaje: "Producto fue creado"});
        });
    }
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 100;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    ModeloProducto.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    ModeloProducto.findById(req.params.productoId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.buscarProducto = (req, res) => {
    ModeloProducto.buscarProducto(req.params.nombre)
        .then((result) => {
            res.status(200).send(result);
        });
};


exports.removeById = (req, res) => {
    ModeloProducto.removeById(req.params.productoId)
        .then((result)=>{
            res.status(204).send({});
        });
};


