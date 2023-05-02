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
        <li>
            <div>
                <img src={ong.logo} alt={ong.name} />
            </div>
            <div>
                <h3>
                    {ong.name}
                </h3>
                {user?.isAdmin ? (
                    <>
                        <button onClick={() => setIsEditModalOpen(true)}>Editar</button>
                        {isEditModalOpen && <EditModal ong={ong} onClose={() => setIsEditModalOpen(false)} />}
                        <button onClick={() => setIsDeleteModalOpen(true)}>Excluir</button>
                        {isDeleteModalOpen && <DeleteModal ong={ong} onClose={() => setIsDeleteModalOpen(false)} />}

                    </>
                ) : (
                    <>
                        <Link to={"/saibaMais/" + ong.name}>Saiba mais</Link>
                        <button onClick={() => setIsDonateModalOpen(true)}>Doe Aqui</button>
                        {isDonateModalOpen && <DonateModal ong={ong} onClose={() => setIsDonateModalOpen(false)} />}
                    </>
                )}
            </div>
        </li>
    )
}

export default OngsCard