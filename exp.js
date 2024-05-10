const http = require("node:http")

const express = require("node:express")

const app= express();

const server= http.createServer(app);

server.listen(3000);



