import { useGetCardsQuery } from "app/api/arkhamDb"
import CardsOverview from "app/container/CardsOverview"

export default function CardsRoute() {
  const { isLoading, data: cards } = useGetCardsQuery()
  if (isLoading) return <div> is loading </div>
  return <CardsOverview cards={cards} />
}
