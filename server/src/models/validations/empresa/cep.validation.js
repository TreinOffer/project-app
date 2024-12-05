export async function isCepInvalid(cep) {
    // Expressão regular para verificar o formato do CEP (XXXXX-XXX)
    const regex = /^[0-9]{5}-[0-9]{3}$/;
  
    // Testa o CEP contra a expressão regular
    return regex.test(cep);
};

export const cepIsInvalid = (cep) => {
    return [
        400,{
            message: `CEP ${cep} inválido ou não encontrado`,
            status: 400
        }
    ];
};
