import { useGetCardsPackQuery } from "app/api/arkhamDb"
import CardsOverview from "app/container/CardsOverview"

export default function CardsRoute() {
  const { isLoading, data: cards } = useGetCardsPackQuery("core")
  if (isLoading) return <div> is loading </div>
  if (!cards) return <div> couldn't find cards </div>
  return <CardsOverview cards={cards} />
}
