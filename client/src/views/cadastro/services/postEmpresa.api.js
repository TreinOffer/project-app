export const submitEmpresa = async (empresa) => {
    console.log("Empresa: ", empresa);
    try {
        const consulta = await fetch(`${process.env.REACT_APP_BACKEND}/cadastro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empresa)
        });

        if (consulta.status === 409) {
            return [409,"CNPJ já existe"];
        } else if (consulta.status === 400) {
            return [400,"Erro nos dados fornecidos. Verifique os campos e tente novamente."];
        } else {
            return [201,"Cadastro efetuado com sucesso!"];
        }
    } catch (error) {
        console.log(error);
        return [500,"Erro ao cadastrar empresa"];
    }
};