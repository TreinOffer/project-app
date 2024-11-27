export const submitEmpresa = async (empresa) => {
    console.log("Empresa: ", empresa);
    try {
        const consulta = await fetch(`http://localhost:5000/cadastro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empresa)
        });

        if (consulta.status === 409) {
            setPopState(popUp.erro("CNPJ já existe"));
        } else if (consulta.status === 400) {
            setPopState(popUp.erro("Erro nos dados fornecidos. Verifique os campos e tente novamente."));
        } else {
            setPopState(popUp.aviso("Cadastro efetuado com sucesso!"));
        }

        console.log(consulta);
    } catch (error) {
        setPopState(popUp.erro("Erro ao cadastrar empresa: " + error));
    }
};