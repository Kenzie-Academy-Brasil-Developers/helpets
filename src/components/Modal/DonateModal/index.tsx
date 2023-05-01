import { IOngs } from "../../../providers/OngsContext"
import { Input } from "../../Form/Input"

interface IDonate{
    ong: IOngs,
    onClose: () => void
}
export const DonateModal = ({ong, onClose}: IDonate) => {
    return(
        <div role="dialog">
            <div>
                <button onClick={onClose}>X</button>
            </div>
            <div>
                <img src={ong.logo} alt={`Logo da ONG ${ong.name}`} />
                <p>{ong.name}</p>
            </div>
            <form>
                <Input label="Valor:" type="number" placeholder="Digite aqui um valor" />
                <button type="submit">Finalizar doação</button>
            </form>
        </div>
    )
} 