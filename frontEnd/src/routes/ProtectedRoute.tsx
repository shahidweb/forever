import { Navigate } from "react-router-dom";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { RoleType } from "../shared/types/constant";

interface Props {
  children: any;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }
  if (user.role == RoleType.ADMIN) return <Navigate to="/admin" replace />;
  return children;
};

export default ProtectedRoute;
