import { IOngs } from "../../../providers/OngsContext"

interface ICard{
    ong: IOngs
}

const OngsCard = ({ong}: ICard) =>{

    return(
        <li>
            <div>
                <img src={ong.logo} alt={ong.name} />
            </div>
            <div>
                <h3>
                    {ong.name}
                </h3>
                <button>Saiba mais</button>
                <button>Doe Aqui</button>
            </div>
        </li>
    )
}

export default OngsCard;