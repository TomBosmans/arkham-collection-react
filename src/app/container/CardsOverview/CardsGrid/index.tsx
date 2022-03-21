import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { LinearProgress } from "@mui/material"
import FactionCell from "./FactionCell"
import TraitsCell from "./TraitsCell"
import NameCell from "./NameCell"
import { CardEntity } from "types"
import { useSearchParams } from "react-router-dom"
import HeaderCell from "./HeaderCell"

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
      hideable: false,
      renderCell: NameCell,
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 2,
      field: "factionName",
      headerName: "Class",
      renderCell: FactionCell,
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 1,
      field: "cost",
      headerName: "Cost",
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 1,
      field: "quantity",
      headerName: "Quantity",
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 2,
      field: "typeName",
      headerName: "Type",
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 3,
      field: "traits",
      headerName: "Traits",
      renderCell: TraitsCell,
      sortable: false,
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 1,
      field: "packId",
      headerName: "Set",
      hideSortIcons: true,
      renderHeader: HeaderCell
    },
    {
      flex: 1,
      field: "encounterName",
      headerName: "Encounter",
      hideSortIcons: true,
      renderHeader: HeaderCell
    }
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
        sortingMode={"server"}
        onSortModelChange={() => {}}
        paginationMode={"server"}
        onPageSizeChange={onPageSizeChange}
        onPageChange={onPageChange}
        rowCount={totalRows}
        hideFooterSelectedRowCount
        disableColumnMenu
        disableColumnFilter
      />
    </div>
  )
}
