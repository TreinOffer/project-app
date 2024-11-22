import EmpresaTecnicoModel from "../models/empresaTecnicoModel.js";

class EmpresaTecnicoController{
    create(req,res){
        const empresa = req.user.primKey;
        const nome = req.body.nome;
        const matricula = req.body.matricula;
        const senha = req.body.senha;
        const tarefa = req.body.tarefa;

        EmpresaTecnicoModel.create(nome,matricula,senha,tarefa,empresa).then(
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
    update(req,res){
        const matricula = req.params.matricula;
        const nome = req.body.nome;
        const senha = req.body.senha;
        const tarefa = req.body.tarefa;
        const colab = req.body.colaboradores;

        EmpresaTecnicoModel.update(nome,senha,tarefa,colab,matricula).then(
            resposta => {
                console.debug(`Atualizando tecnico ${matricula}`);
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug(`Erro: Atualizando tecnico ${matricula}`);
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
    delete(req,res){
        const matricula = req.params.matricula;

        EmpresaTecnicoModel.delete(matricula).then(
            resposta => {
                console.debug(`Deletando tecnico ${matricula}`);
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug(`Erro: Deletando tecnico ${matricula}`);
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
};

export default new EmpresaTecnicoController();