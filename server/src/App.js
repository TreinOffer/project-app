import express from "express";
import cors from 'cors';

import { criarEmpresa } from "./controllers/empresa.controller.js"; 

import { loginJWT } from "./controllers/login.controller.js";
import { authenticateToken } from "./middlewares/login.authentication.js";
import { atualizarTecnico, criarTecnico, inativarTecnico, listarTecnicos } from "./controllers/tecnico.controller.js";
import { upload } from "./services/apiImagem.js";

const server = express({ limit: '10mb' });
const porta = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  };

server.use(express.json());
server.use(cors(corsOptions));
server.use(express.urlencoded({ limit: '10mb', extended: true }));

server.post('/cadastro', criarEmpresa);
server.post("/login", loginJWT);

server.get('/treinos', authenticateToken
        , async(req,res) => {
        const token = req.user;
        console.log("token: ",token);
        res.status(202).send(token);
    }
);

// Rota empresa
    //Rota Tecnicos
        server.get("/tecnicos", authenticateToken, listarTecnicos)
        server.post("/tecnicos", upload.single("foto"), authenticateToken, criarTecnico);
        server.put("/tecnicos/:idTecnico", authenticateToken, atualizarTecnico);
        server.put("/tecnicos/:idTecnico/inativar", authenticateToken, inativarTecnico);
server.post ("/test", upload.single("eduardo"), function(req,res){
    const arquivo = req.file;
    if (arquivo) {
        res.status(201).send("Arquivo enviado")
    }
    res.status(400).send("Sem arquivo")
})
server.listen(porta, () => {
    console.debug("server listening on port " + porta);
});