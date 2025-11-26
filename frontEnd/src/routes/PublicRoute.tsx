import { Navigate } from "react-router-dom";
import { useAppSelector } from "../shared/hooks/reduxHooks";

interface Props {
  children: any;
}

const PublicRoute = ({ children }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
