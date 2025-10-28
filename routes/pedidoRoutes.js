const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/pedidos', authenticate('gerente'), pedidoController.registrarPedido);
router.get('/pedidos', authenticate(), pedidoController.consultarPedidos);
router.get('/pedidos/:id/tempo', authenticate(), pedidoController.consultarTempoPedido);
router.put('/pedidos/:id/finalizar', authenticate('gerente'), pedidoController.finalizarPedido);

module.exports = router;
