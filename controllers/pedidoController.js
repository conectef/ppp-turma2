const pedidoService = require('../service/pedidoService');

exports.registrarPedido = (req, res) => {
  const { mesa, itens } = req.body;
  if (!mesa || !itens) return res.status(400).json({ error: 'Dados obrigatórios ausentes.' });
  const id = pedidoService.pedidos.length + 1;
  const criadoPor = req.user.tipo;
  const criadoEm = new Date();
  const pedido = { id, mesa, itens, criadoPor, criadoEm, status: 'pendente' };
  pedidoService.addPedido(pedido);
  res.status(201).json(pedido);
};

exports.consultarPedidos = (req, res) => {
  if (req.user.tipo === 'gerente') {
    return res.json(pedidoService.getPedidos());
  } else if (req.user.tipo === 'garcom') {
    const pedidosMesa = pedidoService.getPedidosByMesa(req.user.mesa);
    return res.json(pedidosMesa);
  }
  res.status(403).json({ error: 'Acesso negado.' });
};

exports.consultarTempoPedido = (req, res) => {
  const pedido = pedidoService.getPedidoById(parseInt(req.params.id));
  if (!pedido) return res.status(404).json({ error: 'Pedido não encontrado.' });
  const tempoEspera = Math.floor((new Date() - new Date(pedido.criadoEm)) / 1000); // segundos
  res.json({ id: pedido.id, tempoEspera, status: pedido.status });
};

exports.finalizarPedido = (req, res) => {
  if (req.user.tipo !== 'gerente') return res.status(403).json({ error: 'Acesso negado.' });
  const pedido = pedidoService.finalizarPedido(parseInt(req.params.id));
  if (!pedido) return res.status(404).json({ error: 'Pedido não encontrado.' });
  res.json(pedido);
};
