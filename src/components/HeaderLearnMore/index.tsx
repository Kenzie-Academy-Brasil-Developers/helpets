import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import returnPage from "../../assets/returnPage.svg"

export const HeaderLearnMore = () => {
  return (
      <header className="bg-black h-[6.8125rem] w-full">
        <div className="container flex justify-between h-full items-center">
            <Link to={"/dashboard"}>
                <img src={logo} alt="" />
            </Link>
            <Link to="/Dashboard">
                <img src={returnPage} alt="" />
            </Link>
        </div>
      </header>
  )
}
