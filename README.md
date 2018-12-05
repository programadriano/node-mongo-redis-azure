﻿# node-mongo-redis-azure
  
## Projeto

O projeto foi desenvolvido com o CRUD utilizando as tecnologias Node.js, mongodb e Azure. 

## Código

Rotas

Indix  - url:{porta}/index -> com a versão do projeto 

Person - url:{porta}/person  -> rotas para um crud de exemplo

Model

var PersonSchema {
    name: String,
    mail: String,
    role: String
}

## Objeto para post

{
        "name": "Thiago Adriano",
        "mail": "tadriano.net@gmail.com",
        "role": "Admin"
}