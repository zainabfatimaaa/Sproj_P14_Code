import { Socket, Server } from "socket.io";
import http from "http";
import { app } from "./app.js";
import { config } from "dotenv";
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const uri = "mongodb+srv://25100208:zainabzainab@ap.fg1jnuv.mongodb.net/";
const dbName = 'AP';


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

config({
  path: "./config.env",
});

io.on("connection", (socket) => {
  console.log("USER CONNECTED:", socket.id);
});


server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
 
