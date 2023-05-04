import { Link, useParams } from "react-router-dom"
import { IOngs } from "../../providers/OngsContext"
interface ICardLearnMoreProps{
  ong: IOngs
}
export const CardLearnMore = ({ong}: ICardLearnMoreProps) => {
  
  return (
    <>
      <section className="container">
        <div className="flex">
          <div>
            <img src={ong?.logo} alt={ong?.name} />
            <h2>{ong?.name}</h2>
          </div>
          <div>
              <Link to={ong?.link}>Visite o site</Link>
          </div>
        </div>
        <div>
          <h2>
            Descrição da ONG
          </h2>
          <p>{ong?.description}</p>
        </div>
      </section>
    </>
  )
}
