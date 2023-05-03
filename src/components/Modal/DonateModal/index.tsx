import { useState } from "react"
import { IOngs } from "../../../providers/OngsContext"
import { Input } from "../../Form/Input"

interface IDonate{
    ong: IOngs,
    onClose: () => void, 
}

export const DonateModal = ({ ong, onClose }: IDonate) => {
    const [donationValue, setDonationValue] = useState("")
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert(`Obrigado por doar R$${donationValue} para a ONG ${ong.name}`)
        onClose()
    }

    const handleDonationValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDonationValue(event.target.value)
    }

    return(
        <div role="dialog">
            <div>
                <button onClick={onClose}>X</button>
            </div>
            <div>
                <img src={ong.logo} alt={`Logo da ONG ${ong.name}`} />
                <p>{ong.name}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <Input label="Valor:" type="number" placeholder="Digite aqui um valor" value={donationValue} onChange={handleDonationValue} />
                <button type="submit">
                    Finalizar doação
                </button>
            </form>
        </div>
    )
} 