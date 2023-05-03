import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutesPublic = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <h2>Carregando...</h2>
          <p>(Aguarde um instânte estamos processando os dados.)</p>
        </div>
      ) : (!user ? (
        <Outlet />
      ) : (
        <Navigate to="/dashboard" />
      )
      )}
    </>
  );
};
