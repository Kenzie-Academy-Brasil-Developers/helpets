import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ILoginFormData } from "../components/Form/LoginForm/loginFormSchema";

interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    user: IUser | null,
    userLogin: (formData: ILoginFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
}

interface IUser {
    id: string,
    name: string,
    email: string
}

interface IUserLoginResponse {
    acessToken: string,
    user: IUser,
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const userAutoLogin = async () => {
            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                const response = await api.get<IUser>(`/users/${userId}`);
                setUser(response.data);
                // navigate("/dashboard");
            } catch (error) {
                localStorage.removeItem("@TOKEN");
                localStorage.removeItem("@USERID");
            }
        }
        token && userId ? userAutoLogin() : null;
    }, [])

    const userLogin = async (formData: ILoginFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try{
            setLoading(true);
            const response = await api.post<IUserLoginResponse>("/login", formData);
            localStorage.setItem("@TOKEN", response.data.acessToken)
            localStorage.setItem("@USERID", response.data.user.id)
            setUser(response.data.user)
            // navigate("/dashboard")
        } catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }
    return <UserContext.Provider value={{user, userLogin}}>{children}</UserContext.Provider>
}