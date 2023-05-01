import { useContext, useState } from "react"
import { IOngs, OngsContext } from "../../../providers/OngsContext"

interface IDelete {
    ong: IOngs,
    onClose: () => void
}

export const DeleteModal = ({ ong, onClose }: IDelete) => {
    const [loading, setLoading] = useState(false)
    const { removeOng } = useContext(OngsContext)

    return (
        <div role="dialog">
            <div>
                <p>Quer mesmo deletar essa ONG?</p>
                <button onClick={onClose}>X</button>
            </div>
            <div>
                <img src={ong?.logo} alt={`Logo da ONG ${ong?.name}`} />
                <p>{ong?.name}</p>
            </div>
            <button type="submit" disabled={loading} onClick={() => removeOng(ong.id, setLoading)}>
                {loading ? "Deletando ONG..." : "Deletar ONG"}
            </button>
        </div>
    )
}