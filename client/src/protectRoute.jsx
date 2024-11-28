import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem('token');
  let role = null;

  if (token) {
    const decoded = jwtDecode(token);
    role = decoded.role;
  };

  if (token && allowedRoles.includes(role)) {
    return element;
  } 
  else {
    return <Navigate to="/" replace />; 
};

export default ProtectedRoute;