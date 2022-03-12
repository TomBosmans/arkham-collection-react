import CardsGrid from "app/components/CardsGrid"
import { Card } from "app/types/card"

type Props = {
  cards: Card[]
}

export default function CardsOverview({ cards }: Props) {
  return (
    <CardsGrid cards={cards} />
  )
}
