import { useContext } from "react";
import { OngsList } from "../../components/OngsList";
import { UserContext } from "../../providers/UserContext";
import { DashboardMainHeader } from "../../components/DashboardMainHeader";

export const DashboardPage = () => {

    return(
        <main>
            <DashboardMainHeader />
            <OngsList />
        </main>
    )
}