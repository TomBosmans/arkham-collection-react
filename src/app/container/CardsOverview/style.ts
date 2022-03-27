import { Box, Paper, styled } from "@mui/material"

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: theme.spacing(1),
  gridGap: theme.spacing(1),
  gridTemplateColumns: "20% 80%",
  gridTemplateRows: "10% 90%",
  gridTemplateAreas: `
    "a b"
    "a c"
  `,
  height: "100%",
  width: "100%",
}))

export const StyledPacksContainer = styled(Paper)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  gridArea: "a",
  overflow: "auto",
}))

export const StyledFilterContainer = styled(Paper)(({ theme }) => ({
  gridArea: "b",
  padding: theme.spacing(1),
  overflow: "auto",
}))

export const StyledCardscontainer = styled(Paper)({
  gridArea: "c",
  overflow: "auto",
})
