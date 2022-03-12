import { createDraftSafeSelector } from "@reduxjs/toolkit"
import { RootState } from "app/store"

export const selectCardsOverview = (state: RootState) => state.cardsOverview

export const selectCardsOverviewCardsGrid = createDraftSafeSelector(
  selectCardsOverview,
  state => state.cardsGrid
)

export const selectCardsOverviewCardsGridSortModel = createDraftSafeSelector(
  selectCardsOverviewCardsGrid,
  state => state.sortModel
)
