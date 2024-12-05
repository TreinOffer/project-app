async function fetchCep(cep) {
  console.log(cep);
  try {
    const request = await fetch(`${process.env.REACT_APP_BACKEND}/buscarCep/${cep}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("request: ", request);
    if (request.ok) {
      const response = await request.json();
      console.log("resposta: ", response);
      return response;
    }
    return { message: `CEP não existe`, status: 404 };
  } catch (error) {
    return { message: `Erro ao buscar CEP`, erro: error };
  }
}

export async function buscarCep(Cep) {
  async function api() {
    return await fetchCep(Cep);
  }
  const response = await api();
  if (!response || response.message) {
    alert("deu erro");
  } else {
    console.log(response);
    return response;
  }
}
