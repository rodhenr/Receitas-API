## Descrição do Projeto :ledger:

Uma aplicação onde é possível usando verbos HTTP gerenciar receitas no banco de dados.

GET (/api) -> Todas receitas cadastradas no banco de dados.

GET (/api/:id) -> Dados de uma receita individual, sendo necessário passar o ID referente a esta receita.

POST (/api) -> Cadastro de novas receitas no banco de dados. Os campos obrigatórios que devem ser enviadas no body da requisição são "name" e "ingredients", já os campos opcionais são "description", "source", "tags" e "image".

PATCH (/api/:id/:field) -> Altera a informação de algum campo de alguma receita específica. É necessário enviar no body da requisição um campo chamado "data" contendo o conteúdo que deseja que seja inserido no banco de dados.

DELETE (/api/:id) -> Remove do banco de dados uma receita específica.

## Tecnologias :man_technologist:

Para este projeto foram utilizadas as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Mongoose-Sequence](https://www.npmjs.com/package/mongoose-sequence)

## Como replicar este projeto :dvd:

- Você deve fazer o download/clone deste repositório e o abrir na sua IDE.

```
1. Execute o comando npm i para instalar as dependências do projeto
2. Execute o comando npm run dev para rodar o servidor localmente utilizando o nodemon
```

## Dúvidas ou sugestões? :grin:

Caso tenha alguma dúvida ou alguma sugestão fico no aguardo da sua mensagem!
