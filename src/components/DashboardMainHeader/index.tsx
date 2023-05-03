import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { AddModal } from "../Modal/AddModal";

export const DashboardMainHeader = () => {
    const { user } = useContext(UserContext)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    return user?.isAdmin ? (
        <>
        <button onClick={() => setIsAddModalOpen(true)}>Adicionar ONGs</button>
        {isAddModalOpen && <AddModal onClose={() => setIsAddModalOpen(false)} />}
        </>
    ) : (
        <p className="mt-[2.75rem] mb-[2.75rem] text-center text-[1.25rem]">
            Escolha uma ONG e doe qualquer quantia, sua doação faz a diferença.
        </p>
    )
}