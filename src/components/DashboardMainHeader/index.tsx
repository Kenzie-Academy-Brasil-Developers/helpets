import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const DashboardMainHeader = () => {
    const { user } = useContext(UserContext)

    return user?.isAdmin ? (
        <button>Adicionar ONGs</button>
    ) : (
        <p>Escolha uma ONG e doe qualquer quantia, sua doação faz a diferença.</p>
    )
}