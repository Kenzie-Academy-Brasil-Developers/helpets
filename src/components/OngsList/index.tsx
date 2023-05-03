import { useContext } from "react";
import { OngsContext } from "../../providers/OngsContext";
import OngsCard from "./OngCard";


export const OngsList = () => {
    const { listCard } = useContext(OngsContext) 

    return(
        <>
        <ul className="flex flex-wrap gap-[3.3125rem] justify-center mb-[2.75rem]">
            {listCard.map((ong) =>{
                return <OngsCard ong={ong} key={ong.id} />
            })}
        </ul>
        
        </>
    )
}
