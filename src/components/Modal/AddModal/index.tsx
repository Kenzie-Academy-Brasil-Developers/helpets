import { useContext, useState } from "react"
import { OngsContext } from "../../../providers/OngsContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { TAddFormData, addFormSchema } from "./addModalSchema"
import { Input } from "../../Form/Input"
import { Textarea } from "../../Form/Textarea"

interface IAddModalProps {
    onClose: () => void,
}

export const AddModal = ({ onClose }: IAddModalProps) => {
    const [loading, setLoading] = useState(false)
    const { addOng } = useContext(OngsContext)
    const { register, handleSubmit, formState: { errors } } = useForm<TAddFormData>({
        resolver: zodResolver(addFormSchema)
    })

    const submit: SubmitHandler<TAddFormData> = (formData) => {
        addOng(formData, setLoading, onClose)
    }


    return (
        <div>
        <div role="dialog">
            <div>
                <p>Adicionar uma nova ONG:</p>
                <button onClick={onClose}>X</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="URL da imagem:" type="text" {...register("logo")} disabled={loading} error={errors.logo} />
                <Input label="Nome:" type="text" {...register("name")} disabled={loading} error={errors.name} />
                <Textarea label="Descrição:" {...register("description")} disabled={loading} error={errors.description} />
                <Input label="Link do site:" type="text" {...register("link")} disabled={loading} error={errors.link} />
                <button type="submit" disabled={loading}>
                    {loading ? "Adicionando ONG..." : "Adicionar ONG"}
                </button>
            </form>
        </div>
        </div>
    )
}