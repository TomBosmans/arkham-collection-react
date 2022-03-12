import { useGetCardsPackQuery } from "app/api/arkhamDb"
import CardsOverview from "app/container/CardsOverview"
import { setCardsGridIsLoading } from "app/container/CardsOverview/slice"
import { useAppDispatch } from "app/hooks"

export default function CardsRoute() {
  const dispatch = useAppDispatch()
  const { isLoading, data: cards } = useGetCardsPackQuery("core")
  dispatch(setCardsGridIsLoading(isLoading))
  return <CardsOverview cards={cards || []} />
}
