import jwt from 'jsonwebtoken';
const { verify } = jwt;

export function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido', status: 401 });
  }

  verify(token, 'isTreinOffer_or_TreinOff', (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Token inválido', status: 403 });
    }

    req.user = decoded;
    next();
  });
}
