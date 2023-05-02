import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/Form/RegisterForm"
import logo from "../../assets/logo.svg"

export const RegisterPage = () => {
    return(
        <>
        <div className="bg-image-main h-screen bg-cover flex justify-center items-center shadow-color-04 relative">
            <img src={logo} className="fixed top-[65px] left-[85px]"></img>
            <div>
                <p className="text-white text-[1.5rem] max-w-[25.75rem] text-center">
                    "Antes de ter amado um animal, parte da nossa alma permanece desacordada" DOE!
                </p>
            </div>
            <div className="flex flex-col w-[25.75rem] bg-color-05 border border-[#3AB8C7] rounded-[20px] h-[41.25rem] pt-[2.875rem] pr-[2.875rem] pl-[2.875rem] shadow-[0_0px_32px_1px_#3AB8C7]">
                <h2 className="text-[2.5rem] text-white text-center mb-[1.125rem]">
                    Cadastre-se
                </h2>
                <RegisterForm />
                <Link to="/" className="text-white mt-[1.125rem] text-center">
                    Voltar para o login
                </Link>
            </div>
        </div>
        </>
    )
}