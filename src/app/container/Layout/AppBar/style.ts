import { Box, styled, Typography } from "@mui/material"

export const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginBottom: theme.spacing(1)
}))

export const StyledTypography = styled(Typography)({
  flexGrow: 1
})
