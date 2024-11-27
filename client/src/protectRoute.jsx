import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({ element, allowedRoles, ...rest }) => {
  const token = localStorage.getItem('token');
  let role = null;

  if (token) {
    const decoded = jwtDecode(token);
    role = decoded.role;
  };

  // Verifica se o token existe e se a role do usuário está nas roles permitidas
  if (token && allowedRoles.includes(role)) {
    return element; // Retorna o componente se a role for permitida
  } else {
    return <Navigate to="/" replace />; // Redireciona para página de acesso não autorizado
  }
};

export default ProtectedRoute;