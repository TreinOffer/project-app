import express from "express";
import EmpresaTecnicoController from "./controllers/empresaTecnicoController.js";
import { readPontuacao, createPontuacao } from './controllers/empresaGraficoController.js';

const server = express();
const porta = 3000;

server.use(express.json());

server.get("/tecnicos", EmpresaTecnicoController.read);
server.post("/tecnicos", EmpresaTecnicoController.create);
server.put("/tecnicos/:matricula", EmpresaTecnicoController.update);
server.delete("/tecnicos/:matricula", EmpresaTecnicoController.delete);


server.get('/pontuacoes', readPontuacao);
server.get('/pontuacoes', createPontuacao);
// server.put('/pontuacoes', EmpresaGraficoController.update);
// server.delete('/pontuacoes', EmpresaGraficoController.delete);


server.listen(porta, () => {
    console.debug("Server listening on port " + porta);
});
