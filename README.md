# Desafio Aula 6 - Lógica e Programação
Projeto proposto como desafio na aula 6 de Lógica e Programação - Júlio de Lima Mentoria 2.0  
🔗 Acesse a mentoria: [mentoria.juliodelima.com.br](https://mentoria.juliodelima.com.br/)  


# Desafio: Testes Unitários com Mocha

Este projeto consiste em dois arquivos principais:

- Um arquivo JavaScript contendo funções a serem testadas (`pesquisacpf.js`)
- Um arquivo de testes unitários utilizando a biblioteca **Mocha** (`pesquisacpf.test.js`)

O objetivo é demonstrar a aplicação de **testes unitários**, validando a cobertura de **sentença** (statement coverage) e **decisão** (branch/decision coverage).

---

## Técnicas de Cobertura Aplicadas
✔️ Cobertura de Sentença  
Garante que todas as linhas de código foram executadas pelo menos uma vez.  

✔️ Cobertura de Decisão  
Garante que todas as estruturas de decisão (if, else, etc.) foram exercitadas em seus diferentes caminhos.  

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/) – biblioteca de asserção (opcional, mas recomendada)

---

## 📁 Estrutura do Projeto

📁 src  
│   └── pesquisacpf.js  
📁 test  
│   └── pesquisacpf.test.js  
.gitignore  
package.json  


---

## Instalando o Node e o Mocha

npm init -y  
npm install mocha

---
## Executando o Mocha e visualizando as asserções no terminal

Ao executar **npm test** será retornado no terminal o resultado dos testes:  

![image](https://github.com/user-attachments/assets/68e114f8-5823-4828-932d-f89dee6809ec)


---

Este desafio demonstra o uso de Mocha para testes unitários em JavaScript, aplicando boas práticas de cobertura de código.




