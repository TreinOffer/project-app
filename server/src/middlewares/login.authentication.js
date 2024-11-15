import jwt from 'jsonwebtoken';
const { verify } = jwt;

export const validarToken = (req, res, next) => {
  const token = req.headers['authorization'];  // O token geralmente é enviado no header 'Authorization'

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  // Remove o "Bearer" se estiver no formato "Bearer <token>"
  const tokenSemBearer = token.split(' ')[1];

  try {
    // Verifica o token usando a chave secreta
    const decoded = verify(tokenSemBearer, 'isTreinOffer_or_TreinOff');

    // Se for válido, passa o payload para a requisição
    req.user = decoded.user;
    req.cargo = decoded.cargo;
    next();  // Chama o próximo middleware ou rota
  } catch (error) {
    console.log('Erro de validação de token:', error);
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};
