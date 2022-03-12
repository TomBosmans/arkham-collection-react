import { Card } from "app/types/card"

type Props = {
  card: Card
}

export default function CardDetail({ card }: Props) {
  return (
    <img
      src={`https://arkhamdb.com/${card.imagesrc}`}
      alt={card.name}
    />
  )
}
