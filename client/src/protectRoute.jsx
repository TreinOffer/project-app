import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem('token');
  let cargo = null;

  if (token) {
    const decoded = jwtDecode(token);
    cargo = decoded.cargo;
  };

  if (token && allowedRoles.includes(cargo)) {
    return element;
  }
  else {
    return <Navigate to="/" replace />;
  };
}

export default ProtectedRoute;