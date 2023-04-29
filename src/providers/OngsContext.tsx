import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IOngsContextProviderProps {
    children: React.ReactNode
}

interface IOngsContext {
    listCard: IOngs[];
    addOng: (formData: string) => Promise<void>
}

export interface IOngs {
    name: string;
    id: Number;
    description: string;
    link: string;
    logo: string;
    userId: Number;
}

export const OngsContext = createContext({} as IOngsContext)

export const OngsProvider = ({ children }: IOngsContextProviderProps) => {
    const [listCard, setListCard] = useState<IOngs[]>([])

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const ongs = async () => {
            try {
                const { data } = await api.get("/ongs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setListCard(data)
            }
            catch {
                console.log("error")
            }
        }
        ongs()
    }, [])

    const addOng = async (formData: string) => {
        const token = localStorage.getItem("@TOKEN")
        try{
            const {data} = await api.post("/ongs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setListCard([...listCard, data])
        }
        catch{
            console.log("Não foi possivel adicionar nova ong")
        }
    }


    return(
        <OngsContext.Provider value={{ listCard, addOng }}>
            {children}
        </OngsContext.Provider>
    )
}


