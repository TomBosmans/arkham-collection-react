import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import DarkModeSwitch from "./DarkModeSwitch"
import { StyledBox, StyledTypography } from "./style"

export default function LayoutAppBar() {
  return (
    <StyledBox>
      <AppBar position="static">
        <Toolbar>
          <StyledTypography variant="h6">
            Arkham Collection
          </StyledTypography>
          <DarkModeSwitch />
        </Toolbar>
      </AppBar>
    </StyledBox>
  )
}
