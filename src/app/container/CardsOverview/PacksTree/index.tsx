import TreeView from "@mui/lab/TreeView"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { useGetPacksQuery } from "app/api/arkhamCollection"
import { PackTreeEntity } from "types"
import PacksTreeItem from "./PacksTreeItem"

export default function PacksTree() {
  const { data: packs } = useGetPacksQuery()
  if (!packs) return <></>

  const renderTree = (pack: PackTreeEntity) => {
    return (
      <PacksTreeItem pack={pack} key={pack.id}>
        {Array.isArray(pack.children)
          ? pack.children.map(child => renderTree(child))
          : null}
      </PacksTreeItem>
    )
  }

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {packs.map(node => renderTree(node))}
    </TreeView>
  )
}
