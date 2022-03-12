import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type State = {
  darkMode: boolean
}

const initialState: State = {
  darkMode: true
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setDarkMode: (state, actions: PayloadAction<boolean>): State => {
      return {
        ...state,
        darkMode: actions.payload
      }
    }
  }
})

export const { setDarkMode } = layoutSlice.actions
export default layoutSlice.reducer
