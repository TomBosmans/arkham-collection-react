import Router from "./app/routes/router"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/system"
import { createTheme, CssBaseline } from "@mui/material"
import { useAppSelector } from "app/hooks"
import { selectDarkMode } from "app/container/Layout/selectors"

export default function App() {
  const darkMode = useAppSelector(selectDarkMode)

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
