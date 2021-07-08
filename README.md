# Prueba backend Rosendo Yanez – Cloud District 

Primero agradecer la oportunidad brindada por ustedes en mi para realizar la prueba, aquí les dejo una especie de tutorial de cómo pueden probar los endpoints

## Antes de utilizar 

- Debemos de tomar en cuenta que tenemos las siguientes aplicaciones instaladas:
 - Node.js instalada (https://nodejs.org/)
 - MongoDB instalada y ejecutando en su maquina local (https://www.mongodb.com/)
 - Ejecutar `npm install` or `yarn` en la carpeta del proyecto

## Uso

Para ejecutar el proyecto, usa el comando:
 - `npm start`
    - Esto ejecutara el servidor en el puerto 33061
  - `npm test`
    - Esto ejecutara las pruebas.

## Cuando el proyecto está corriendo

Pueden usar Postman para las llamadas a los endpoints o su herramienta de preferencia.

## Creación de usuario

/POST – localhost:33061/users/

Petición:

`{`
`    "nombre" : "Rosendo Yanez",`
`    "email" : "rosendo@correo.com",`
`    "password" : "s3cr3tp4sswo4rd"`
`}`

Respuesta:

`{`
`    "id": "60e729eb4025fe18084bd39b"`
`}`

## Autenticación de usuario

/POST – localhost:33061/auth/

Petición:

` {`
`    "email" : "rosendo@correo.com",`
`    "password" : "s3cr3tp4sswo4rd"`
`}`

Respuesta:

`{`
   ` "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGU3Mjc1ZTI3YTMwZjFmZDhhOWQ5NGYiLCJlbWFpbCI6InJvc2VuZG9AY29ycmVvLmNvbSIsInBlcm1pc3Npb25MZXZlbCI6NCwicHJvdmlkZXIiOiJlbWFpbCIsIm5hbWUiOiJ1bmRlZmluZWQgdW5kZWZpbmVkIiwicmVmcmVzaEtleSI6Iko0RXpiRTlwSCtrTjRRUHlSWSs5dXc9PSIsImlhdCI6MTYyNTc2NTc0MX0.qvbdEGAv3CpjR4m8_D461d9F4Jq5M0LiwPzUQXrSf7w",`
   ` "refreshToken": "RFJEWDAxaUdkV1VseThWSm5kMHdXUGxySU1LdGx0K3V4MEM0aUxHUFpGOHowR0RnQ0srclFMdkptNVk1NFFpT1VoMGk2NmtSKzU1K0FONm1xM1dTaVE9PQ=="`
`}`


## Creación de producto

/POST – localhost:33061/productos/

Petición:

`{ `
    `"nombre": "Chicle",`
   ` "descripcion": "Esto es un producto que tiene todo",`
    `"precio": 10,`
   ` "iva": "4%"`
`}`

Respuesta:

`{`
`    "id": "60e737fe4025fe18084bd39e",`
`    "mensaje": "Producto fue creado"`
`}`

## Lista de producto

/GET – localhost:33061/productos/

[
    {
        "precio": {
            "subTotal": 1000,
            "valorIva": 40,
            "total": 1040,
            "precioConFormato": "€1,040.00"
        },
        "_id": "60e618680c42dc57b87d5abd",
        "nombre": "Marcos",
        "descripcion": "Silva",
        "iva": "4%",
        "__v": 0,
        "id": "60e618680c42dc57b87d5abd"
    },
    {
        "precio": {
            "subTotal": 1000,
            "valorIva": 40,
            "total": 1040,
            "precioConFormato": "€1,040.00"
        },
        "_id": "60e7057a6166c33b942e08bb",
        "nombre": "",
        "descripcion": "Silva",
        "iva": "4%",
        "__v": 0,
        "id": "60e7057a6166c33b942e08bb"
    },
    {
        "precio": {
            "subTotal": 1000,
            "valorIva": 40,
            "total": 1040,
            "precioConFormato": "€1,040.00"
        },
        "_id": "60e705846166c33b942e08bd",
        "nombre": "234234",
        "descripcion": "Silva",
        "iva": "4%",
        "__v": 0,
        "id": "60e705846166c33b942e08bd"
    },
]

## Listado de producto con paginación 

/GET – localhost:33061/productos/?limit=1&page=1

[
    {
        "precio": {
            "subTotal": 1000,
            "valorIva": 40,
            "total": 1040,
            "precioConFormato": "€1,040.00"
        },
        "_id": "60e7057a6166c33b942e08bb",
        "nombre": "",
        "descripcion": "Silva",
        "iva": "4%",
        "__v": 0,
        "id": "60e7057a6166c33b942e08bb"
    }
]

## Búsqueda de producto individual

/GET – localhost:33061/productos/nombreDelProducto

[
    {
        "precio": {
            "subTotal": 1000,
            "valorIva": 40,
            "total": 1040,
            "precioConFormato": "€1,040.00"
        },
        "_id": "60e618680c42dc57b87d5abd",
        "nombre": "Marcos",
        "descripcion": "Silva",
        "iva": "4%",
        "__v": 0,
        "id": "60e618680c42dc57b87d5abd"
    }
]

