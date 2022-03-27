import { TreeItem } from "@mui/lab"
import { Checkbox, FormControlLabel } from "@mui/material"
import { TreeItemComponent } from "app/components/TreeItemComponent"
import { useSearchParams } from "react-router-dom"
import { PackTreeEntity } from "types"

type Props = {
  pack: PackTreeEntity
  children: JSX.Element[] | null
}
export default function PacksTreeItem({ pack, children }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selected = searchParams.getAll("pack[]")
  const checked = selected.includes(pack.id)

  const onChange = () => {
    searchParams.delete("pack[]")
    if (!checked) searchParams.append("pack[]", pack.id)

    selected.forEach(id => {
      if (id === pack.id) return
      searchParams.append("pack[]", id)
    })
    setSearchParams(searchParams.toString())
  }

  const label = (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={pack.name}
    />
  )

  return (
    <TreeItem
      ContentComponent={TreeItemComponent}
      key={pack.id}
      nodeId={pack.id}
      label={label}
    >
      {children}
    </TreeItem>
  )
}
