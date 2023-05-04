import { Link, useParams } from "react-router-dom"
import { IOngs } from "../../providers/OngsContext"

interface ICardLearnMoreProps{
  ong: IOngs
}
export const CardLearnMore = ({ong}: ICardLearnMoreProps) => {
  
  return (
    <section>
      <div>
        <img src={ong?.logo} alt={ong?.name} />
        <h2>{ong?.name}</h2>
        <div>
            <Link to={ong?.link}>Visite o site</Link>
        </div>
      </div>
      <p>{ong?.description}</p>
    </section>
  )
}
