import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { RoleType } from "../shared/types/constant";

const ProtectedAdmin = ({ children }: { children: JSX.Element }) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) return <Navigate to="/admin/login" replace />;
  if (user.role !== RoleType.ADMIN) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedAdmin;
