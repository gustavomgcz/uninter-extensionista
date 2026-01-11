# Projeto Igreja Presbiteria Vila Formosa

Site desenvolvido em React, que permite ao usuário acessar informações da igreja, consultar canais de comunicação, como WhatsApp, Instagram e e-mail para que as pessoas consigam fácil contato com a igreja e divulgar ações de caridade e projetos sociais realizados pela igreja, visando aumentar a visibilidade da mesma para atrair mais participantes e apoiadores para essas iniciativas.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)


## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js (Nodemailer), Express

## Instalação

Instale as dependências do front e backend 

```
cd frontend
npm install

cd ../backend
npm install
```

### Pré-requisitos

Certifique-se de ter o Node.js e npm instalados.

### Passos para a instalação

1. Clone o repositório:
```
   git clone https://github.com/SeuUsuario/SeuRepositorio.git
   cd SeuRepositorio
```

2. Crie e configure as variáveis de ambiente:
* Crie um arquivo .env na pasta backend com as seguintes variáveis:
```
    EMAIL_USER=<seu-usuario-de-email>
    EMAIL_PASS=<sua-senha-de-email>
```

## Uso

1. Execute o Backend

```
cd backend
node server.js
```

2. Execute o Frontend

```
cd frontend
npm start
```