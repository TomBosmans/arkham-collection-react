import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { arkhamDb } from "./api/arkhamDb"
import cardsOverviewReducer from "./container/CardsOverview/slice"
import LayoutReducer from "./container/Layout/slice"

export const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    cardsOverview: cardsOverviewReducer,
    [arkhamDb.reducerPath]: arkhamDb.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(arkhamDb.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
