
import http from "http";

import express from "express";

import "FileSystem";

const adminRoutes = fsync("./routes/admin.js")

const shopRoutes = fsync("./routes/shop.js")

import bodyParser from "body-parser";
import { fsync } from "fs";

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use(shopRoutes);

const server = http.createServer(app);
server.listen(3000);