const jwt = require('jsonwebtoken');
const SECRET = 'segredo';
exports.login = (req, res) => {
  const { usuario, senha, tipo } = req.body;
  // Simulação de login
  if ((tipo === 'gerente' && usuario === 'gerente' && senha === '1234') ||
      (tipo === 'garcom' && usuario === 'garcom' && senha === '4321')) {
    const token = jwt.sign({ usuario, tipo }, SECRET, { expiresIn: '1h' });
    return res.json({ token, tipo });
  }
  res.status(401).json({ error: 'Credenciais inválidas' });
};
