import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import returnPage from "../../assets/returnPage.svg"

export const HeaderLearnMore = () => {
  return (
    <header>
      <img src={logo} alt="logo do site" />
      <Link to="/Dashboard">
        <img src={returnPage} alt="" />
      </Link>
    </header>
  )
}
