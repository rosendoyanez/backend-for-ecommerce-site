exports.validarProducto = (producto) => {
    const error = {"view" : false};
    const listaIva = ["4%","10%","21%"];
    const mensajesError = {
        "nombre": "el campo de nombre es requerido",
        "descripcion": "El campo descripción es requerido.",
        "precio": "El campo precio es requerido.",
        "iva": "El Campo de IVA es requerido",
        "tipoIva": "Los tipos de IVA son (4%, 10% y 21%)"
    
    }    
    
    const {
    nombre,
    descripcion,
    precio,
    iva,
    } = producto;
    
    typeof nombre === 'undefined' ? error.view = true : "";
    if(error.view === true){
        return {"error": true, "mensaje": mensajesError.nombre }
    }
    typeof descripcion === 'undefined' ? error.view = true : "";
    if(error.view === true){
        return {"error": true, "mensaje": mensajesError.descripcion }
    }
    typeof precio === 'undefined' ? error.view = true : "";
    if(error.view === true){
        return {"error": true, "mensaje": mensajesError.precio }
    }
    typeof iva === 'undefined' ? error.view = true : "";
    if(error.view === true){
        return {"error": true, "mensaje": mensajesError.iva }
    }
    listaIva.indexOf(iva) === -1 ? error.view = true : "";
    if(error.view === true){
        return {"error": true, "mensaje": mensajesError.tipoIva }
    }
    
    return {"error": false};
    }



    exports.crearObjeto = (producto) => {
        
        const {
            nombre,
            descripcion,
            precio,
            iva,
            } = producto;   

            const ivaToNumber = parseInt(iva.replace("%",""));
            const objetoPrecio = (iva,precio) => {
                const subTotal = precio;
                const valorIva = precio * iva / 100;
                const total = subTotal + valorIva;
                const precioConFormato = new Intl.NumberFormat('ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format( total);
                return {"subTotal": subTotal, "valorIva": valorIva, "total":total, "precioConFormato": precioConFormato}

            }

            const productoListo = {
                "nombre": nombre,
                "descripcion": descripcion,
                "iva": iva,
                precio: objetoPrecio(ivaToNumber,parseInt(precio)),
            }




       return productoListo;
    }