const { pesquisarPessoaPorCpf } = require("../src/pesquisacpf");
const assert = require("assert");

describe("Pesquisar CPF", () => {
  it("Deve retornar nome, cpf e frutas favoritas do CPF '25836974133'", () => {
    const resultadoPessoa = {
      nome: "Andy",
      cpf: "25836974133",
      frutasFavoritas: ["maçã", "manga"],
    };

    const pesquisaCpfPessoa = pesquisarPessoaPorCpf("25836974133");

    assert.strictEqual(pesquisaCpfPessoa.cpf, resultadoPessoa.cpf);
    assert.strictEqual(pesquisaCpfPessoa.nome, resultadoPessoa.nome);
    assert.deepEqual(pesquisaCpfPessoa.frutasFavoritas, resultadoPessoa.frutasFavoritas);
  });

  it("Deve retornar 'CPF não encontrado' para um CPF inexistente", () => {
    const pesquisaCpfInvalido = '000000123000';
    const resultado = pesquisarPessoaPorCpf(pesquisaCpfInvalido);
    assert.strictEqual(resultado, "CPF não encontrado, digite novamente");
  });
});
