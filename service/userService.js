// Serviço de usuários (banco em memória)
const users = [];
module.exports = {
  users,
  addUser: (user) => users.push(user),
  findUser: (nome) => users.find(u => u.nome === nome),
  findUserById: (id) => users.find(u => u.id === id),
};