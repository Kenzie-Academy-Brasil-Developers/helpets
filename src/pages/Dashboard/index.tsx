import { useContext } from "react";
import { OngsList } from "../../components/OngsList";
import { UserContext } from "../../providers/UserContext";
import { DashboardMainHeader } from "../../components/DashboardMainHeader";
import { Header } from "../../components/Header";

export const DashboardPage = () => {

    return (
        <>
            <Header />
            <main className="container">
                <DashboardMainHeader />
                <OngsList />
            </main>
        </>
    )
}