import { useContext } from "react"
import { OngsContext } from "../../providers/OngsContext"
import OngsCard from "./OngCard"


const OngsList = () => {
    const { listCard } = useContext(OngsContext) 

    return(
        <>
        <ul>
            {listCard.map((ong) =>{
                return <OngsCard ong={ong} key={ong.id} />
            })}
        </ul>
        
        </>

    )
}

export default OngsList