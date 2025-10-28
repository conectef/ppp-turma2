const express = require('express');
const app = express();
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

app.use(express.json());
app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
