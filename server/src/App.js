import express from "express";
import a from "./funcionarios.js";

porta = 5050;

const server = express();

server.use(express.json("iniciando servidor "+porta));

server.get('/tecnicos',(req,res) => {try {
    res.send(json(a))
} catch (error) {
    res.send(error)    
}});

server.listen(porta, () => {
    console.log("listening server em :"+porta);
});