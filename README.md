# Projeto Blog API

  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

  A aplicação foi desenvolvida com:

  - `Node.js`
  - `Sequelize`
  - `JWT`
  - `Arquitetura MSC`
  - `docker`
  - `docker-compose`
  - `MySql`
  - `Express`;


  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  ** :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.

- `docker-compose up -d --build`
- `docker exec -it blogs_api bash`
- `npm install`
- `npm run prestart`
- `npm run seed`

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install`
- `npm run prestart`
- `npm run seed`
