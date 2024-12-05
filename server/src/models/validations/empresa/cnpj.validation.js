// Função para remover caracteres não numéricos
function limparCNPJ(cnpj) {
  return cnpj.replace(/[^\d]/g, "");
}

// Função para calcular o primeiro dígito verificador
function calcularPrimeiroDV(cnpj) {
  const peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const soma = cnpj
    .split("")
    .slice(0, 12)
    .reduce((acc, digito, i) => acc + digito * peso[i], 0);
  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

// Função para calcular o segundo dígito verificador
function calcularSegundoDV(cnpj) {
  const peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const soma = cnpj
    .split("")
    .slice(0, 13)
    .reduce((acc, digito, i) => acc + digito * peso[i], 0);
  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

// Função para validar o CNPJ
export async function cnpjInvalid(cnpj) {
  // Limpar o CNPJ
  cnpj = limparCNPJ(cnpj);

  // Verificar se tem 14 caracteres
  if (cnpj.length !== 14) {
    return true;
  }

  // CNPJ inválidos que podem ocorrer com padrões repetitivos
  const cnpjInvalido = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];

  if (cnpjInvalido.includes(cnpj)) {
    return true;
  }

  // Calcular e verificar o primeiro dígito verificador
  const primeiroDV = calcularPrimeiroDV(cnpj);
  if (parseInt(cnpj[12]) !== primeiroDV) {
    return true;
  }

  // Calcular e verificar o segundo dígito verificador
  const segundoDV = calcularSegundoDV(cnpj);
  if (parseInt(cnpj[13]) !== segundoDV) {
    return true;
  }

  // Se passou por todas as validações, o CNPJ é válido
  return false;
}

export const cnpjMessage = (cnpj) => {
  return [
    400,
    {
      message: `CNPJ ${cnpj} é inválido`,
      status: 400,
    },
  ];
};
