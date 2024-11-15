import express from "express";
import EmpresaTecnicoController from "./controllers/empresaTecnicoController.js";
import { criarEmpresa } from "./controllers/empresaCadastroController.js";
import cors from 'cors';
import { AtualizarEmpresa } from "./controllers/empresa.controller.js";
import { loginJWT } from "./controllers/login.controller.js";
import { validarToken } from "./middlewares/login.authentication.js";

const server = express();
const porta = 5000;

server.use(express.json());
server.use(cors());

server.post('/cadastro', criarEmpresa);

server.get("/tecnicos",validarToken,EmpresaTecnicoController.read);
server.post("/tecnicos",EmpresaTecnicoController.create);
server.put("/tecnicos/:matricula",EmpresaTecnicoController.update);
server.delete("/tecnicos/:matricula",EmpresaTecnicoController.delete);

server.post("/login", loginJWT);

server.put("/cadastro/:id", AtualizarEmpresa);

server.listen(porta, () => {
    console.debug("server listening on port " + porta);
});