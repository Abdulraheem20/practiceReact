
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequiredAuth = ({children}) => {
//   const navigate = useNavigate();
  const auth = useAuth();
  if (!auth.user1) {
    return <Navigate to='/login' />
  }
  return children
};
