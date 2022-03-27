import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { LinearProgress } from "@mui/material"
import FactionCell from "./FactionCell"
import TraitsCell from "./TraitsCell"
import NameCell from "./NameCell"
import { CardEntity } from "types"
import { useSearchParams } from "react-router-dom"
import HeaderCell from "./HeaderCell"
import { useEffect } from "react"

type Props = {
  cards: CardEntity[]
  totalRows: number
  isLoading: boolean
}
export default function CardsGrid({ cards, isLoading, totalRows }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("pagination[page]")) || 0
  const pageSize = Number(searchParams.get("pagination[limit]")) || 100

  useEffect(() => {
    if (!searchParams.get("pagination[page]")) {
      searchParams.set("pagination[page]", "0")
    }

    if (!searchParams.get("pagination[limit]")) {
      searchParams.set("pagination[limit]", "100")
    }

    setSearchParams(searchParams.toString())
  }, [searchParams, setSearchParams])

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
      page={page}
      pageSize={pageSize}
      onPageSizeChange={onPageSizeChange}
      onPageChange={onPageChange}
      rowCount={totalRows}
      hideFooterSelectedRowCount
      disableColumnMenu
      disableColumnFilter
    />
  )
}
