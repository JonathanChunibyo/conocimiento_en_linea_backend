const Server = require("../src/src/models/server.models");
require('dotenv').config(); 

const server = new Server();

server.listen();
