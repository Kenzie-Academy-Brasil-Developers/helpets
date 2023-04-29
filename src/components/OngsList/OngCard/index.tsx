import { useContext } from "react"
import { IOngs } from "../../../providers/OngsContext"
import { UserContext } from "../../../providers/UserContext"

interface ICard{
    ong: IOngs
}

const OngsCard = ({ong}: ICard) =>{
    const { user } = useContext(UserContext)

    return(
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
                        <button>Editar</button>
                        <button>Excluir</button>
                    </>
                ) : (
                    <>
                        <button>Saiba mais</button>
                        <button>Doe Aqui</button>
                    </>
                )}
            </div>
        </li>
    )
}

export default OngsCard;