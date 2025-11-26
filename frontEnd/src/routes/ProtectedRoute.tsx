import { Navigate } from "react-router-dom";
import { useAppSelector } from "../shared/hooks/reduxHooks";

interface Props {
  children: any;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
