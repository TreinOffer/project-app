import express from "express";
import EmpresaTecnicoController from "./controllers/empresaTecnicoController.js";
import { criarPontuacaoController, mostrarPontuacoes } from "./controllers/grafico.controller.js";

const server = express();
const porta = 5000;

server.use(express.json());

// tecnicos 
server.get("/tecnicos", EmpresaTecnicoController.read);
server.post("/tecnicos", EmpresaTecnicoController.create);
server.put("/tecnicos/:matricula", EmpresaTecnicoController.update);
server.delete("/tecnicos/:matricula", EmpresaTecnicoController.delete);

// pontuacoes
server.post("/pontuacoes", criarPontuacaoController);
server.get("/pontuacoes/:idColaborador", mostrarPontuacoes);

server.listen(porta, () => {
    console.debug("Server listening on port " + porta);
});
