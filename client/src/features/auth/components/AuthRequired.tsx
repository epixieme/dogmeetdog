import { Outlet, Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
}

export default function AuthRequired({ isAuthenticated }: Props) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
