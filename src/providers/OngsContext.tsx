import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { TAddFormData } from "../components/Modal/AddModal/addModalSchema";
import { TEditFormData } from "../components/Modal/EditModal/editModalSchema";

interface IOngsContextProviderProps {
    children: React.ReactNode
}

interface IOngsContext {
    listCard: IOngs[],
    ong: IOngs | null,
    addOng: (formData: TAddFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, onClose: () => void) => Promise<void>,
    removeOng: (ongId: Number, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>,
    editOng: (formData: TEditFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, ongId: Number, onClose: () => void) => Promise<void>,
}
export interface IOngs {
    name: string,
    id: Number,
    description: string,
    link: string,
    logo: string,
    userId: Number,
}

export const OngsContext = createContext({} as IOngsContext)

export const OngsProvider = ({ children }: IOngsContextProviderProps) => {
    const [listCard, setListCard] = useState<IOngs[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedOng, setSelectedOng] = useState<IOngs | null>(null)

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
            catch(error) {
                console.log(error)
            } 
        }
        ongs()
    }, [])

    const addOng = async (formData: TAddFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, onClose: () => void) => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")
        try{
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.post("/ongs", {...formData, userId})
            setListCard([...listCard, response.data])
            onClose()
        }
        catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const removeOng = async (ongId: Number, setLoading: React.Dispatch<React.SetStateAction<boolean>> ) => {
        const token = localStorage.getItem("@TOKEN")
        try{
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.delete(`/ongs/${ongId}`)
            const newOngsList = listCard.filter(currentOng => currentOng.id !== ongId)
            setListCard(newOngsList)
            console.log('Ong removida com sucesso')
        } catch (error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const editOng = async (formData: TEditFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>, ongId: Number, onClose: () => void ) => { 
        const token = localStorage.getItem("@TOKEN")
        try{
            setLoading(true)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.patch(`/ongs/${ongId}`, formData)
            const updatedOng = listCard.map(ong => ong.id === response.data.id ? response.data : ong)
            setListCard(updatedOng)
            onClose()
        } catch (error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }


    return(
        <OngsContext.Provider value={{ listCard, addOng, removeOng, ong: selectedOng, editOng }}>
            {children}
        </OngsContext.Provider>
    )
}


