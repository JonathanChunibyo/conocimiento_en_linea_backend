const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/mongoose.connection');

class Server {

    constructor() {
        this.app  = express();
        this.serverHost = process.env.HOST;
        this.serverPort = process.env.PORT;

        this.paths = {
            auth:'/api/auth',
        };
        this.db();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async db() {
        await dbConnection();
    }

    middlewares() {

        // Cors
        this.app.use( cors() );

        // public directory
        this.app.use( express.static('public') );

    }

    routes() {
        
        this.app.use( this.paths.auth, require('../routes/auth.routes'));
        
    }

    listen() {

        this.app.listen( this.serverPort, this.serverHost, () => {
            console.log(`Server running on port http://${this.serverHost}:${this.serverPort}`);
        });

    }

}




module.exports = Server;