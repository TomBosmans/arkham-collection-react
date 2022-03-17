import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { LinearProgress } from "@mui/material"
import FactionCell from "./FactionCell"
import TraitsCell from "./TraitsCell"
import NameCell from "./NameCell"
import { CardEntity } from "types"
import { useSearchParams } from "react-router-dom"

type Props = {
  cards: CardEntity[]
  totalRows: number
  isLoading: boolean
}
export default function CardsGrid({ cards, isLoading, totalRows }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const rows = cards.map(card => ({ ...card, traits: card.traits.join(",") }))
  const columns: GridColDef[] = [
    {
      flex: 2,
      field: "name",
      headerName: "Name",
      renderCell: NameCell,
      hideable: false
    },
    {
      flex: 2,
      field: "factionName",
      headerName: "Class",
      renderCell: FactionCell
    },
    { flex: 1, field: "cost", headerName: "Cost" },
    { flex: 1, field: "quantity", headerName: "Quantity" },
    { flex: 2, field: "typeName", headerName: "Type" },
    {
      flex: 3,
      field: "traits",
      headerName: "Traits",
      renderCell: TraitsCell
    },
    { flex: 1, field: "packId", headerName: "Set" },
    { flex: 1, field: "encounterName", headerName: "Encounter" }
  ]

  const onPageSizeChange = (limit: number) => {
    searchParams.set("pagination[limit]", `${limit}`)
    setSearchParams(searchParams.toString())
  }

  const onPageChange = (offset: number) => {
    searchParams.set("pagination[page]", `${offset}`)
    setSearchParams(searchParams.toString())
  }

  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
          LoadingOverlay: LinearProgress
        }}
        loading={isLoading}
        rows={rows}
        columns={columns}
        paginationMode={"server"}
        onPageSizeChange={onPageSizeChange}
        onPageChange={onPageChange}
        rowCount={totalRows}
        hideFooterSelectedRowCount
      />
    </div>
  )
}
