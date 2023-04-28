import { Link } from "react-router-dom"
import { LoginForm } from "../../components/Form/LoginForm"

export const LoginPage = () => {
    return (
        <>
            <div>
                <p>"Antes de ter amado um animal, parte da nossa alma permanece desacordada" DOE!</p>
            </div>
            <div>
                <LoginForm />
                <Link to="/register">Cadastre=se</Link>
            </div>
        </>
    )
}