import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import DarkModeSwitch from "./DarkModeSwitch"
import { StyledTypography } from "./style"

export default function LayoutAppBar() {
  return (
    <AppBar>
      <Toolbar>
        <StyledTypography variant="h6">Arkham Collection</StyledTypography>
        <DarkModeSwitch />
      </Toolbar>
    </AppBar>
  )
}
