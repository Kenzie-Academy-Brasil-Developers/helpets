import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { DashboardPage } from "../pages/Dashboard";
import { LearnMore } from "../pages/LearnMore";

export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<DashboardPage />}/>
            </Route>
            <Route path="/saibaMais/:name" element={<LearnMore />}/>
        </Routes>
    )
}