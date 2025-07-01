function pesquisarPessoaPorCpf(cpf) {
  const pessoas = [
    {
      nome: "Julio",
      cpf: "659369369366",
      frutasFavoritas: ["pera", "uva"],
    },
    {
      nome: "Andy",
      cpf: "25836974133",
      frutasFavoritas: ["maçã", "manga"],
    },
    {
      nome: "Norma",
      cpf: "98765432198",
      frutasFavoritas: ["maçãs", "uva"],
    },
  ];

  for (let i = 0; i < pessoas.length; i++) {
    if( cpf == pessoas[i].cpf){
        return pessoas[i]
    } 
  }
  return "CPF não encontrado, digite novamente";
}

module.exports = { pesquisarPessoaPorCpf }
