import { GridSortModel } from "@mui/x-data-grid"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type State = {
  cardsGrid: {
    sortModel: GridSortModel
  }
}

const initialState: State = {
  cardsGrid: {
    sortModel: []
  }
}

export const cardsOverviewSlice = createSlice({
  name: "cardsOverview",
  initialState,
  reducers: {
    setCardsGridSortModel: (
      state,
      actions: PayloadAction<GridSortModel>
    ): State => {
      return {
        ...state,
        cardsGrid: { ...state.cardsGrid, sortModel: actions.payload }
      }
    }
  }
})

export const { setCardsGridSortModel } = cardsOverviewSlice.actions
export default cardsOverviewSlice.reducer
