import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // ✅ Redirect if user is null

  if (!user) return null; // ✅ Prevent rendering protected content before redirection

  return <>{children}</>;
};

export default ProtectedRoute;
