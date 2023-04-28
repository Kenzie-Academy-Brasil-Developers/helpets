import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/Form/RegisterForm"

export const RegisterPage = () => {
    return(
        <>
        <div>
        <p>"Antes de ter amado um animal, parte da nossa alma permanece desacordada" DOE!</p>
        </div>
        <div>
            <p>Cadastre-se</p>
            <RegisterForm />
            <Link to="/">Voltar para o login</Link>
        </div>
        </>
    )
}