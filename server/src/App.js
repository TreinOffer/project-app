import express from "express";
import cors from 'cors';
import path from "path";import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { criarEmpresa } from "./controllers/empresa.controller.js"; 

import { loginJWT } from "./controllers/login.controller.js";
import { authenticateToken } from "./middlewares/login.authentication.js";
import { atualizarTecnico, criarTecnico, inativarTecnico, listarTecnicos } from "./controllers/tecnico.controller.js";
import { upload } from "./services/apiImagem.js";
import { apiCep } from "./services/apiCEP.js";
import { corsOptions } from "./config/cors.options.js";
import { mostrarPontuacoes } from "./controllers/grafico.controller.js";
import { atualizarColaborador, criarColaborador, inativarColaborador, listarColaboradors as listarColaboradores } from "./controllers/colaborador.controller.js";
import { criarCapaTreino, criarTreinamento, listarModulo, listarTreinamentos } from "./controllers/treinamento.controller.js";

const server = express({ limit: '10mb' });
const porta = 5000;
const imgDirectory = path.join(__dirname, "imgs");

server.use("/imgs", express.static(imgDirectory));
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

// Rota para graficos    
    server.get("/pontuacoes/:idColaborador", mostrarPontuacoes);    

// Rota empresa
    //Rota Tecnicos
        server.get("/tecnicos", authenticateToken, listarTecnicos)
        server.post("/tecnicos", upload.single("Imagem"), authenticateToken, criarTecnico);
        server.put("/tecnicos/:idTecnico", upload.single("Imagem"), authenticateToken, atualizarTecnico);
        server.put("/tecnicos/:idTecnico/inativar", authenticateToken, inativarTecnico);
    
    // Rota colaboradores
        server.get("/colaboradores", authenticateToken, listarColaboradores)
        server.post("/colaboradores", upload.single("Imagem"), authenticateToken, criarColaborador);
        server.put("/colaboradores/:idColaborador", upload.single("Imagem"), authenticateToken, atualizarColaborador);
        server.put("/colaboradores/:idColaborador/inativar", authenticateToken, inativarColaborador);


server.post ("/test", upload.single("eduardo"), function(req,res){
    const arquivo = req.file;
    if (arquivo) {
        res.status(201).send("Arquivo enviado")
    }
    res.status(400).send("Sem arquivo")
})
// Rota Tecnico
    //uploadTreino
        server.post("/capaTreino", upload.single("capaTreino"), authenticateToken, criarCapaTreino)
        server.post("/uploadTreino", upload.fields([
            { name: "ImagemTreino", maxCount: 20 },
            { name: "VideoTreino", maxCount: 20 }
        ]),
        authenticateToken, criarTreinamento);

server.get("/treinamentos", authenticateToken, listarTreinamentos);
server.get("/treino/:idTreino", authenticateToken, listarModulo);
server.get("/buscarCep/:cep", apiCep);

server.listen(porta, () => {
    console.debug("Server listening on port " + porta);
});
