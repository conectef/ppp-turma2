// Modelo de usuário (gerente/garçom)
class User {
  constructor(id, nome, tipo, senha, mesa) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo; // 'gerente' ou 'garcom'
    this.senha = senha;
    this.mesa = mesa; // só para garçom
  }
}
module.exports = User;