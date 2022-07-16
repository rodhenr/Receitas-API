## Descrição do Projeto :ledger:

Uma aplicação onde é possível usando verbos HTTP gerenciar receitas no banco de dados.

GET (/api) -> Nessa rota é possível enviar um GET para receber a lista de todas receitas cadastradas no banco de dados.

GET (/api/:id) -> Nessa rota é possível receber os dados de uma receita individual, sendo necessário passar o ID referente a esta receita.

POST (/api) -> É possível através do metódo POST cadastrar novas receitas no banco de dados, para isso é necessário incluir no body da requisição as seguintes informações: name, description, ingredients, source, tags e image.

PATCH (/api/:id/:field) -> Nessa rota é possível alterar a informação de algum campo de alguma receita específica, para isso é necessário além dos params corretos também enviar no body da requisição o conteúdo que deseja que seja inserido no campo desejado.

DELETE (/api/:id) -> Aqui é possível remover do banco de dados uma receita específica através do método DELETE.

## Tecnologias :man_technologist:

Para este projeto foram utilizadas as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)

## Como replicar este projeto :dvd:

- Você deve fazer o download/clone deste repositório e o abrir na sua IDE.

```
1. Execute o comando npm i para instalar as dependências do projeto
2. Execute o comando npm run dev para rodar o servidor localmente utilizando o nodemon
```

## Dúvidas ou sugestões? :grin:

Caso tenha alguma dúvida ou alguma sugestão fico no aguardo da sua mensagem!
