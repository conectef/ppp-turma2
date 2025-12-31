const userService = require('../service/userService');
const jwt = require('jsonwebtoken');
const SECRET = 'restaurante_secret';

exports.register = (req, res) => {
  const { nome, tipo, senha, mesa } = req.body;
  if (!nome || !tipo || !senha) return res.status(400).json({ error: 'Dados obrigatórios ausentes.' });
  if (userService.findUser(nome)) return res.status(409).json({ error: 'Usuário já existe.' });
  const id = userService.users.length + 1;
  userService.addUser({ id, nome, tipo, senha, mesa });
  res.status(201).json({ id, nome, tipo, mesa });
};

exports.login = (req, res) => {
  const { nome, senha } = req.body;
  const user = userService.findUser(nome);
  if (!user || user.senha !== senha) return res.status(401).json({ error: 'Credenciais inválidas.' });
  const token = jwt.sign({ id: user.id, tipo: user.tipo, mesa: user.mesa }, SECRET, { expiresIn: '2h' });
  res.json({ token, tipo: user.tipo });
};