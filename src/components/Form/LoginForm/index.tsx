import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormData, loginFormSchema } from "./loginFormSchema";
import { Input } from "../Input";

export const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const { userLogin } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>({
        resolver: zodResolver(loginFormSchema),
    })

    const submit: SubmitHandler<ILoginFormData> = (formData) => {
        userLogin(formData, setLoading)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input type="email" {...register("email")} disabled={loading} error={errors.email} />
            <Input type="password" {...register("password")} disabled={loading} error={errors.password} />
            <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
            </button>
        </form>
    )
}
// export { ILoginFormData };

