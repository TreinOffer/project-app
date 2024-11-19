import express from "express";
import EmpresaTecnicoController from "./controllers/empresaTecnicoController.js";
import { criarEmpresa } from "./controllers/empresaCadastroController.js";
import cors from 'cors';
import { AtualizarEmpresa } from "./controllers/empresa.controller.js";
import { loginJWT } from "./controllers/login.controller.js";
import { authenticateToken } from "./middlewares/login.authentication.js";

const server = express();
const porta = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  };

server.use(express.json());
server.use(cors(corsOptions));

server.post('/cadastro', criarEmpresa);

server.get("/tecnicos",EmpresaTecnicoController.read);
server.post("/tecnicos",EmpresaTecnicoController.create);
server.put("/tecnicos/:matricula",EmpresaTecnicoController.update);
server.delete("/tecnicos/:matricula",EmpresaTecnicoController.delete);

server.post("/login", loginJWT);

server.get('/treinos', authenticateToken
    , async(req,res) => {
    const token = req.user;
    console.log("token: ",token);
    res.status(202).send(token);
}
);

server.put("/cadastro/:id", AtualizarEmpresa);

server.listen(porta, () => {
    console.debug("server listening on port " + porta);
});