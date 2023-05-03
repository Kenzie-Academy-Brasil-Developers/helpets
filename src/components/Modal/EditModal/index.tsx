import { useContext, useState } from "react"
import { IOngs, OngsContext } from "../../../providers/OngsContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../Form/Input"
import { Textarea } from "../../Form/Textarea"
import { TEditFormData, editFormSchema } from "./editModalSchema"
import { zodResolver } from "@hookform/resolvers/zod"

interface IEdit {
    ong: IOngs,
    onClose: () => void
}

export const EditModal = ({ ong, onClose }: IEdit) => {
    const { editOng } = useContext(OngsContext)
    const { register, handleSubmit, formState: {errors} } = useForm<TEditFormData>({
        resolver: zodResolver(editFormSchema)
    })
    const [loading, setLoading] = useState(false)

    const submit: SubmitHandler<TEditFormData> = (formData) => {
        editOng(formData, setLoading, ong.id, onClose)
    }

    return (
        <div role="dialog">
            <div>
                Editar ONG:
                <button onClick={onClose}>X</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="Nome:" defaultValue={ong?.name} {...register("name")} disabled={loading} error={errors.name} />
                <Textarea label="Descrição" defaultValue={ong?.description} {...register("description")} disabled={loading} error={errors.description}/>
                <button type="submit" disabled={loading}>
                    {loading ? "Editando ONG..." : "Editar ONG"}
                </button>
            </form>
        </div>
    )
}