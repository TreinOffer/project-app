# Project App

Aplicação web para gestão de treinamentos, colaboradores e técnicos, com painel administrativo, autenticação JWT, upload de imagens e vídeos, módulos de treinamento e telas de acompanhamento.

## Estrutura

- `client/`: front-end em React
- `server/`: API em Node.js + Express

## Requisitos

- Node.js instalado
- Banco de dados MySQL configurado para o backend
- Arquivos de ambiente criados a partir dos exemplos do projeto

## Variáveis de ambiente

### Client

Crie o arquivo `client/.env` com base em `client/exemplo.env`.

```env
PORT=
REACT_APP_BACKEND=
```

### Server

Crie o arquivo `server/.env` com base em `server/exemplo.env`.

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=

ALLOWED_ORIGINS=
```

## Instalação

Instale as dependências em cada pasta:

```bash
cd client
npm install

cd ../server
npm install
```

## Execução

### Backend

```bash
cd server
npm run dev
```

O servidor roda com `nodemon` e expõe a API principal.

### Frontend

```bash
cd client
npm start
```

### Mock local do client

O client também possui um script opcional para `json-server`:

```bash
cd client
npm run backend
```

## Funcionalidades principais

- Login com JWT
- Controle de acesso por perfil
- Cadastro e manutenção de técnicos e colaboradores
- Lista de treinamentos e módulo detalhado
- Upload de conteúdo para treinamentos
- Pop-ups e notificações reutilizáveis

## Rotas principais

- `/`: landing page
- `/login`: autenticação
- `/treinos`: lista de treinamentos
- `/treino/:idTreino`: módulo de treino
- `/tecnicos`: gestão de técnicos
- `/colaboradores`: gestão de colaboradores
- `/uploadCurso`: criação de curso
- `/uploadTreino`: criação de treino

## Observações

- O front consome a API definida em `REACT_APP_BACKEND`.
- O backend lê configuração de banco via variáveis em `server/.env`.
- O projeto usa imagens centralizadas em `client/src/imgs/arrayImagens.jsx`.