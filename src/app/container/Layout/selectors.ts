import { createDraftSafeSelector } from "@reduxjs/toolkit"
import { RootState } from "app/store"

export const selectLayout = (state: RootState) => state.layout

export const selectDarkMode = createDraftSafeSelector(
  selectLayout,
  state => state.darkMode
)

