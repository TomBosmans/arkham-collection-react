import { useGetCardsQuery } from "app/api/arkhamCollection"
import { useSearchParams } from "react-router-dom"
import CardsFilter from "./CardsFilter"
import CardsGrid from "./CardsGrid"

export default function CardsOverview() {
  const [searchParams] = useSearchParams()
  const { isFetching, data } = useGetCardsQuery(searchParams.toString())

  return (
    <>
    <CardsFilter />
    <CardsGrid
      cards={data?.data || []}
      totalRows={data?.totalRows || 0}
      isLoading={isFetching}
    />
    </>
  )
}
