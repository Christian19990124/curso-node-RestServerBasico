const express = require('express')
const cors = require('cors')

class server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        //lectura y parseo del body

        this.app.use(express.json());


        //directorio publico
        this.app.use(express.static('public'));


    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en prueba', this.port);
        });
    }
}

module.exports = server;