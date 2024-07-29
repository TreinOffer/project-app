import EmpresaTecnicoModel from "../models/empresaTecnicoModel.js";

class EmpresaTecnicoController{
    create(req,res){
        const nome = req.body.nome;
        const matricula = req.body.matricula;
        const senha = req.body.senha;
        const tarefa = req.body.tarefa;
        const colab = req.body.colaboradores;

        EmpresaTecnicoModel.create(nome,matricula,senha,tarefa,colab).then(
            resposta => {
                console.debug("Tecnico criado");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: Criar tecnico");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
    read(req,res){
        EmpresaTecnicoModel.read().then(
            resposta => {
                console.debug("Exibindo tecnicos");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: Exibindo tecnicos");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
    update(){};
    delete(){};
};

export default new EmpresaTecnicoController();