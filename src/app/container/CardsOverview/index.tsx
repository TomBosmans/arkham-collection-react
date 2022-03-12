import { Card } from "app/types/card"
import CardsGrid from "./CardsGrid"

type Props = {
  cards: Card[]
}

export default function CardsOverview({ cards }: Props) {
  return (
    <CardsGrid cards={cards} />
  )
}
