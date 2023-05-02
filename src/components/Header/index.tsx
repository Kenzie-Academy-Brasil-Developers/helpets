import logout from "../../assets/logout.svg"
import logo from "../../assets/logo.svg"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Link } from "react-router-dom"

export const Header = () => {
    const { userLogout } = useContext(UserContext)

    return (
        <header>
            <Link to={"/dashboard"}>
                <img src={logo} alt="" />
            </Link>
            <div>
                <input type="search" />
                <button onClick={() => userLogout()}>
                    <img src={logout} alt="" />
                </button>
            </div>
        </header>
    )
}