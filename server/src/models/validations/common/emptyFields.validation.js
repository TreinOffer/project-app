function isEmpty(campo) {
    console.log("isEmpty? ",campo);
    return campo === null || campo.trim() === '' || campo === undefined;
};

export function isEmptyField(campo, propriedades) {
        console.log("corpo: ",campo)
        console.log("propertiesCampo: ",propriedades);
      return propriedades.some(prop => isEmpty(campo[prop]));
};

export const mensagem = [
  400,
  {
    message: `Campos obrigatórios malformados`,
    status: 400
  }
];