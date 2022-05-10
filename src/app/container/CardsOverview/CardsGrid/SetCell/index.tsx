import { useGetPacksQuery } from "app/api/arkhamCollection"
import { CardEntity } from "types"

type Props = {
  value: CardEntity["packId"]
}
export default function SetCell({ value }: Props) {
  const { data: packs } = useGetPacksQuery()

  const pack = packs?.find(pack => {
    return pack.id === value || pack.children.some(pack => pack.id === value)
  })

  const packName = [pack, ...pack?.children || []].find(pack => pack?.id === value)?.name

  return <>{packName}</>
}
