export async function submitCapa(capa) {
  console.log("capinha: ", capa);
  const token = localStorage.getItem("token");
  try {
    
    const request = await fetch(`${process.env.REACT_APP_BACKEND}/capaTreino`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: capa,
    });

    const resposta = await request.json();
    console.log("respostaCapa: ",resposta);

    if (resposta.status === 400) {
      return 400;
    }else{
      return 201;
    };
  } catch (error) {
    console.log(error);
  };
};

export async function submitTreino(treino) {
  console.log("treinin: ", treino);
  const token = localStorage.getItem("token");
  try {
    
    const request = await fetch(`${process.env.REACT_APP_BACKEND}/uploadTreino`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: treino,
    });

    const resposta = await request.json();
    console.log("respostaCapa: ",resposta);

    if (resposta.status === 400) {
      return 400;
    };

    return 201;
  } catch (error) {
    console.log(error);
  };
}