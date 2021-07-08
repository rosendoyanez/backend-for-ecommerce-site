process.env.NODE_ENV = 'test';


const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require('../');
chai.use(chaiHttp);
chai.should();
const laData = require("./TestData/producto");
const data = require("./TestData/usuario");



describe("Usuarios", () => {
  describe('/POST crea usuario', () => {
      it('Esta llamada debe retornar un código de estado 201 que se creó el usuario', (done) => {
        chai.request(server)
            .post('/users')
            .send(data.usuario)
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('Object');
                  res.body.should.have.property('id');
              done();
            });
      });
    });
    describe('/POST AUTH valida usuario', () => {
      it('Esta llamada debe retornar un código de estado 200 y valida que el usuario esta en la base de datos', (done) => {
        chai.request(server)
            .post('/auth')
            .send(data.login)
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('Object');
                  res.body.should.have.property('accessToken');
                  res.body.should.have.property('refreshToken');
              done();
            });
      });
    });

  });

describe("Productos", () => {
    describe('/POST test Productos - inserta producto en prueba', () => {
        it('Esta llamada debe retornar un código de estado 201 que se creó el producto', (done) => {
          chai.request(server)
              .post('/test/productos')
              .send(laData.productoPrueba)
              .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('Object');
                done();
              });
        });
      });
        describe('/POST Productos - inserta producto sin permiso', () => {
          it('Esta llamada debe retornar un código de estado de 401 que no está autorizado', (done) => {
            chai.request(server)
                .post('/productos')
                .send(laData.productoPrueba)
                .end((err, res) => {
                      res.should.have.status(401);
                  done();
                });
          });
        
    });
    describe('/GET Productos - listado de productos', () => {
      it('Esta llamada debe retornar el listado de productos creados', (done) => {
        chai.request(server)
            .get('/productos')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
               done();
            });
      });
    
});

describe('/GET Productos - Producto Individual', () => {
  it('Esta llamada debe retornar el producto buscado', (done) => {
    chai.request(server)
        .get('/productos/Chicle')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
          done();
        });
  });

});




    });