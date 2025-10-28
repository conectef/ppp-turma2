# API de Acompanhamento de Pedidos de Restaurante

Esta API REST permite o registro e acompanhamento do tempo de pedidos em um restaurante. O sistema possui autenticação JWT e separação de permissões para gerente e garçom.

## Funcionalidades
- Registro de pedidos
- Consulta de tempo de espera dos pedidos
- Autenticação de gerente e garçom
- Documentação Swagger

## Estrutura
- `routes/` - Rotas da API
- `controllers/` - Lógica dos endpoints
- `service/` - Regras de negócio
- `model/` - Modelos de dados
- `resources/` - Documentação Swagger

## Como rodar
1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start`
3. Acesse a documentação Swagger em http://localhost:3000/docs

## Autenticação
- Gerente: acesso total
- Garçom: consulta de pedidos
- Autenticação via JWT

## Documentação
Acesse `/docs` para visualizar e testar os endpoints via Swagger.
