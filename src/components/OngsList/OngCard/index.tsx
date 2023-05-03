import { useContext, useState } from "react"
import { IOngs } from "../../../providers/OngsContext"
import { UserContext } from "../../../providers/UserContext"
import { DeleteModal } from "../../Modal/DeleteModal"
import { EditModal } from "../../Modal/EditModal"
import { DonateModal } from "../../Modal/DonateModal"
import { Link } from "react-router-dom"

interface ICard {
    ong: IOngs
}

const OngsCard = ({ ong }: ICard) => {
    const { user } = useContext(UserContext)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

    return (
        <li className="bg-[#D9D9D9] w-[20rem] h-[20.3125rem] rounded-[8px]">
            <div className="flex justify-center items-center max-h-[9.75rem] min-h-[12.5rem] p-[5rem] border border-black">
                <img src={ong.logo} alt={ong.name} className="h-[7rem]" />
            </div>
            <div className="flex-col flex justify-center items-center bg-black h-[38%] rounded-b-lg">
                <h3 className="text-white text-lg mb-[1.6875rem]">
                    {ong.name}
                </h3>
                <div className="flex gap-[1.4375rem]">
                    {user?.isAdmin ? (
                        <>
                            <button onClick={() => setIsEditModalOpen(true)} className="bg-white w-[7.375rem] flex justify-center items-center h-[2.125rem] rounded-lg text-[#3AB8C7]">Editar</button>
                            {isEditModalOpen && <EditModal ong={ong} onClose={() => setIsEditModalOpen(false)} />}
                            <button onClick={() => setIsDeleteModalOpen(true)} className="bg-[#3AB8C7] w-[7.375rem] flex justify-center items-center h-[2.125rem] rounded-lg text-white">Excluir</button>
                            {isDeleteModalOpen && <DeleteModal ong={ong} onClose={() => setIsDeleteModalOpen(false)} />}

                        </>
                    ) : (
                        <>
                            <Link to={"/saibaMais/" + ong.name} className="bg-white w-[7.375rem] flex justify-center items-center h-[2.125rem] rounded-lg text-[#3AB8C7]">Saiba mais</Link>
                            <button onClick={() => setIsDonateModalOpen(true)} className="bg-[#3AB8C7] w-[7.375rem] flex justify-center items-center h-[2.125rem] rounded-lg text-white">Doe Aqui</button>
                            {isDonateModalOpen && <DonateModal ong={ong} onClose={() => setIsDonateModalOpen(false)} />}
                        </>
                    )}
                </div>
            </div>
        </li>
    )
}

export default OngsCard