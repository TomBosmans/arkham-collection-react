import {
  DataGrid,
  GridColDef,
  GridSortModel,
  GridToolbar
} from "@mui/x-data-grid"
import { Card } from "app/types/card"
import { LinearProgress } from "@mui/material"
import FactionCell from "./FactionCell"
import TraitsCell from "./TraitsCell"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { setCardsGridSortModel } from "../slice"
import { selectCardsOverviewCardsGridSortModel } from "../selectors"

type Props = {
  cards: Card[]
}
export default function CardsGrid({ cards }: Props) {
  const dispatch = useAppDispatch()
  const sortModel = useAppSelector(selectCardsOverviewCardsGridSortModel)

  const onSortModelChange = (newSortModel: GridSortModel) =>
    dispatch(setCardsGridSortModel(newSortModel))

  const rows = cards.map((card, id) => ({ ...card, id }))
  const columns: GridColDef[] = [
    { flex: 2, field: "name", headerName: "Name" },
    {
      flex: 2,
      field: "faction_name",
      headerName: "Class",
      renderCell: FactionCell
    },
    { flex: 1, field: "cost", headerName: "Cost" },
    { flex: 2, field: "type_name", headerName: "Type" },
    { flex: 1, field: "", headerName: "Icons" },
    {
      flex: 3,
      field: "traits",
      headerName: "Traits",
      renderCell: TraitsCell
    },
    { flex: 1, field: "pack_name", headerName: "Set" },
    { flex: 1, field: "", headerName: "Encounter" }
  ]

  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
          LoadingOverlay: LinearProgress
        }}
        rows={rows}
        columns={columns}
        sortModel={sortModel}
        onSortModelChange={onSortModelChange}
      />
    </div>
  )
}
