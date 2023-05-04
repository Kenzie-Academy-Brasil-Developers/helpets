import { useContext } from "react"
import { Link, useParams } from "react-router-dom"

import { OngsContext } from "../../providers/OngsContext"
import { IOngs } from "../../providers/OngsContext"

import { HeaderLearnMore } from "../HeaderLearnMore";

export const CardLearnMore = () => {
  const { listCard } = useContext(OngsContext);

  const { name } = useParams()
  const ong: IOngs = listCard.find((ong) => ong?.name === name)!

  return (
    <>
      <HeaderLearnMore />
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
