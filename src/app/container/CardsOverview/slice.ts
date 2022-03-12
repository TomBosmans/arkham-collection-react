import { GridSortModel } from "@mui/x-data-grid"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type State = {
  cardsGrid: {
    isLoading: boolean
    sortModel: GridSortModel
  }
}

const initialState: State = {
  cardsGrid: {
    isLoading: false,
    sortModel: []
  }
}

export const cardsOverviewSlice = createSlice({
  name: "cardsOverview",
  initialState,
  reducers: {
    setCardsGridIsLoading: (state, actions: PayloadAction<boolean>): State => {
      return {
        ...state,
        cardsGrid: { ...state.cardsGrid, isLoading: actions.payload }
      }
    },
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

export const { setCardsGridIsLoading, setCardsGridSortModel } =
  cardsOverviewSlice.actions
export default cardsOverviewSlice.reducer
