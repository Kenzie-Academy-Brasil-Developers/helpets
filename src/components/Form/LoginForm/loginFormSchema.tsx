import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, { message: "O e-mail é obrigatório" }).nonempty({ message: "Campo obrigatório" }),
    password: z.string().min(1, { message: "A senha é obrigatória" }).nonempty({ message: "Campo obrigatório" })
});

export type ILoginFormData = z.infer<typeof loginFormSchema>;