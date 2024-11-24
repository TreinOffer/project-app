import express from "express";
import cors from 'cors';

import { criarEmpresa } from "./controllers/empresa.controller.js"; 

import { loginJWT } from "./controllers/login.controller.js";
import { authenticateToken } from "./middlewares/login.authentication.js";
import { criarTecnico, listarTecnicos } from "./controllers/tecnico.controller.js";

const server = express();
const porta = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  };

server.use(express.json());
server.use(cors(corsOptions));

server.post('/cadastro', criarEmpresa);
server.post("/login", loginJWT);

server.get('/treinos', authenticateToken
        , async(req,res) => {
        const token = req.user;
        console.log("token: ",token);
        res.status(202).send(token);
    }
);

server.get("/tecnicos", authenticateToken, listarTecnicos)
server.post("/tecnicos", authenticateToken, criarTecnico);

server.listen(porta, () => {
    console.debug("server listening on port " + porta);
});