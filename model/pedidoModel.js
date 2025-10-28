// Modelo de Pedido
class Pedido {
  constructor(id, mesa, itens, criadoPor, criadoEm, status) {
    this.id = id;
    this.mesa = mesa;
    this.itens = itens;
    this.criadoPor = criadoPor;
    this.criadoEm = criadoEm;
    this.status = status; // 'pendente', 'finalizado'
  }
}
module.exports = Pedido;