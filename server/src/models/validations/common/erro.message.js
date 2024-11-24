const erro = (error) => {
  return [
    {
      erro: error,
      status: 500,
    },
  ];
};

export default erro;