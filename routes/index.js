const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const pedidoRoutes = require('./pedidoRoutes');

router.use('/api', userRoutes);
router.use('/api', pedidoRoutes);

module.exports = router;
