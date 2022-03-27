import { Box, styled } from "@mui/material"
import appBarHeight from "app/utils/appBarHeight"

export const StyledMain = styled("main")({
  display: "flex",
  height: "100vh",
  width: "100vw"
})

export const StyledContent = styled(Box)(({ theme }) => ({
  paddingTop: appBarHeight(theme),
  height: "100%",
  width: "100%"
}))
