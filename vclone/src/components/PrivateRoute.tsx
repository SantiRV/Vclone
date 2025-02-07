import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ children, role }: { children: JSX.Element, role: "Admin" | "User" }) => {
  const { user, role: userRole } = useAuth();

  if (!user) return <Navigate to="/" />;
  if (role !== userRole) return <Navigate to="/" />;

  return children;
};