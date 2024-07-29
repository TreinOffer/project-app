import express from "express";
import EmpresaTecnicoController from "./controllers/empresaTecnicoController.js";

const server = express();
const porta = 3000;

server.use(express.json());

server.get("/tecnicos",EmpresaTecnicoController.read);
server.post("/tecnicos",EmpresaTecnicoController.create);

server.listen(porta, () => {
    console.debug("server listening on port " + porta);
});