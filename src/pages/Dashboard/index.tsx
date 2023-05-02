import { Header } from "../../components/Header"
import OngsList from "../../components/OngsList"
import OngsCard from "../../components/OngsList/OngCard"

export const DashboardPage = () => {

    return (
        <>
            <Header />
            <main>
                <OngsList />
            </main>
        </>
    )
}