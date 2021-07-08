const ControladorProductos = require('./controllers/controlador.productos');
const config = require('../common/config/env.config');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');


const TIENDA = config.permissionLevels.TIENDA;


exports.routesConfig = function (app) {

    app.get('/productos',[
         ControladorProductos.list
    ]);

    app.post('/productos', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(TIENDA),
        ControladorProductos.insert
    ]);
    app.post('/test/productos', [
        ControladorProductos.insert
    ]);



    app.get('/productos/:nombre', [
        ControladorProductos.buscarProducto
    ]);
  
    
};
