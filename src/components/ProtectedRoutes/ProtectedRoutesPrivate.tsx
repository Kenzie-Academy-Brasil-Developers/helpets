import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import { OngsProvider } from "../../providers/OngsContext";

export const ProtectedRoutesPrivate = () => {
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
          <p>(Aguarde um instânte estamos processando os dados)</p>
        </div>
      ) : (user ? (
        <OngsProvider>
          <Outlet />
        </OngsProvider>
      ) : (
        <Navigate to="/" />
      )
      )}
    </>
  );
};
