// Serviço de pedidos (banco em memória)
const pedidos = [];
module.exports = {
  pedidos,
  addPedido: (pedido) => pedidos.push(pedido),
  getPedidos: () => pedidos,
  getPedidoById: (id) => pedidos.find(p => p.id === id),
  getPedidosByMesa: (mesa) => pedidos.filter(p => p.mesa === mesa),
  finalizarPedido: (id) => {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) pedido.status = 'finalizado';
    return pedido;
  }
};
