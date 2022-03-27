import { TableSortLabel } from "@mui/material"
import { GridColumnHeaderParams, GridSortItem } from "@mui/x-data-grid"
import { useSearchParams } from "react-router-dom"

export default function HeaderCell(props: GridColumnHeaderParams) {
  const [searchParams, setSearchParams] = useSearchParams()
  if (!props.colDef.sortable) return <>{props.colDef.headerName}</>

  const sortFields = searchParams.get("sort")?.split(",") || []
  const activeFields = sortFields.map((field): GridSortItem => {
    if (field[0] !== "-") return { field, sort: "asc" }
    return { field: field.substring(1), sort: "desc" }
  })

  const currentField = activeFields.find(({ field }) => field === props.field)
  const active = !!currentField
  const direction = currentField?.sort || undefined

  const singleSort = () => {
    if (!direction) searchParams.set("sort", props.field)
    if (direction === "asc") searchParams.set("sort", `-${props.field}`)
    if (direction === "desc") searchParams.delete("sort")
    setSearchParams(searchParams.toString())
  }

  const multiSort = () => {
    const newActiveFields = activeFields.filter(
      ({ field }) => field !== props.field
    )
    if (!direction) newActiveFields.push({ field: props.field, sort: "asc" })
    if (direction === "asc") newActiveFields.push({ field: props.field, sort: "desc" })

    if (newActiveFields.length === 0) {
      searchParams.delete("sort")
      return setSearchParams(searchParams.toString())
    }

    const newSortFields = newActiveFields
      .map(({ field, sort }) => {
        if (sort === "asc") return field
        return `-${field}`
      })
      .join(",")

    searchParams.set("sort", newSortFields)
    setSearchParams(searchParams.toString())
  }

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.shiftKey) return singleSort()
    return multiSort()
  }

  return (
    <TableSortLabel sx={{ width: "100%" }} active={active} direction={direction} onClick={onClick}>
      {props.colDef.headerName}
    </TableSortLabel>
  )
}
