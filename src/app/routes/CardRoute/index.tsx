import { useGetCardQuery } from "app/api/arkhamDb"
import CardDetail from "app/container/CardDetail"
import { useParams } from "react-router-dom"

export default function CardRoute() {
  const { id } = useParams<{ id: string }>()
  const { isLoading, data: card } = useGetCardQuery(id || "")
  if (isLoading) return <div> is loading </div>
  if (!card) return <div> card not found </div>
  return <CardDetail card={card} />
}
