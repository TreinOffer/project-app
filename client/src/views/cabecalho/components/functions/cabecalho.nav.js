import imgs from "../../../../imgs/arrayImagens";

export async function rotasCabecalho(cargo) {
    // console.log("ESTÁ CHEGANDO? ::: ",cargo)
  const urlsPublicas = [
    {
      tit: "Início",
      rota: "/",
      imagem: imgs.home
    },
    {
      tit: "Treinos", 
      rota: "/treinos",
      imagem: imgs.livro
    },
  ];

  let urlsPrivadas = [];

  if (cargo === "empresa") {
    urlsPrivadas = [
      {
        tit: "Técnicos",
        rota: "/tecnicos",
        imagem: imgs.tecnicos,
      },
      {
        tit: "Colaboradores",
        rota: "/colaboradores",
        imagem: imgs.colaboradores,
      },
      {
        tit: "Fatura",
        rota: "/fatura",
        imagem: imgs.financas,
      },
    ];
  } else if (cargo === "tecnico") {
    urlsPrivadas = [
      {
        tit: "Enviar Treinamento",
        rota: "/uploadTreino",
        imagem: imgs.upload,
      },
      {
        tit: "Monitoramento",
        rota: "/graficos",
        imagem: imgs.monitorar
      },
    ];
  } else {
    urlsPrivadas = [
      {
        tit: "Certificados",
        rota: "/certificado",
        imagem: imgs.livro,
      },
    ];
  };
    const urls = [...urlsPublicas, ...urlsPrivadas];
    // console.log("eduardo ", urls);
    return urls;
};

export async function corCabecalho(cargo) {
  const cor =
    cargo === "empresa"
      ? "hsl(0,100%,80%)"
      : cargo === "tecnico"
      ? "hsl(20,100%,80%)"
      : "hsl(200,100%,80%)";

  return cor;
}
