import jwt from 'jsonwebtoken';
const { verify } = jwt;

export function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Não autorizado', status: 401 });
  }

  verify(token, 'isTreinOffer_or_TreinOff', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido', status: 403 });
    }

    req.user = decoded;
    next();
  });
}
