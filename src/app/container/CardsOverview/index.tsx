import { useGetCardsQuery } from "app/api/arkhamCollection"
import { useSearchParams } from "react-router-dom"
import CardsGrid from "./CardsGrid"

export default function CardsOverview() {
  const [searchParams] = useSearchParams()
  const { isLoading, data } = useGetCardsQuery({
    pagination: {
      limit: searchParams.get("pagination[limit]") || "50",
      page: searchParams.get("pagination[page]") || "0",
    }
  })

  return (
    <CardsGrid cards={data?.data || []} totalRows={data?.totalRows || 0} isLoading={isLoading} />
  )
}
