import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { AddModal } from "../Modal/AddModal";

export const DashboardMainHeader = () => {
    const { user } = useContext(UserContext)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    return user?.isAdmin ? (
        <div onClick={() => setIsAddModalOpen(true)} className="bg-[#3AB8C7] w-[14.188rem] flex justify-center items-center h-[2.813rem] rounded-lg text-white justify-around mt-7 mb-20">
        <button>Adicionar ONGs</button>
        <span className="border-solid border-2 border-[#FFFFFF] rounded-full w-8 flex justify-center text-[1.2rem] items-center">+</span>
        {isAddModalOpen && <AddModal onClose={() => setIsAddModalOpen(false)} />}
        </div>
    ) : (
        <p className="mt-[2.75rem] mb-[2.75rem] text-center text-[1.25rem]">
            Escolha uma ONG e doe qualquer quantia, sua doação faz a diferença.
        </p>
    )
}