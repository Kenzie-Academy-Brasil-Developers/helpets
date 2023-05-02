import { useContext } from "react"
import { Link, useParams } from "react-router-dom"

import { OngsContext } from "../../providers/OngsContext"
import { IOngs } from "../../providers/OngsContext"

export const CardLearnMore = () => {
  const { listCard } = useContext(OngsContext);

  const { name } = useParams()
  const ong: IOngs = listCard.find((ong) => ong?.name === name)!

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
