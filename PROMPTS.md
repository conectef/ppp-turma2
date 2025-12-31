1. Objetivo
Criar um API Rest para acompanhar o tempo de pedido de um restaurante.

2. Contexto
- A API possui as seguintes funcionalidades: registro de pedidos, tempo de espera.
- Para que eu possa usar as funcionalidades, preciso fazer login como gerente.
- Para que o garçom possa consultar seu pedido, ele precisa fazer login como garçom.
- Os garçons apenas consultam o tempo do pedido, gerentes acessam todas as funcionalidades do sistema.


3. Regras
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.


