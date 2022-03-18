import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { arkhamCollection } from "./api/arkhamCollection"
import LayoutReducer from "./container/Layout/slice"

export const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    [arkhamCollection.reducerPath]: arkhamCollection.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(arkhamCollection.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
