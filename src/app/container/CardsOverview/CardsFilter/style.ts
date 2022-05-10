import { Box, styled } from "@mui/material"

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: theme.spacing(1),
  gridGap: theme.spacing(1),
  gridTemplateAreas: `
    "a b c"
    "d e f"
  `,
  height: "100%",
  width: "100%"
}))

export const StyledNameFilterContainer = styled(Box)({
  gridArea: "a"
})
export const StyledFactionNameFilterContainer = styled(Box)({
  gridArea: "b"
})
export const StyledTypeNameFilterContainer = styled(Box)({
  gridArea: "c"
})
export const StyledEncounterNameFilterContainer = styled(Box)({
  gridArea: "d"
})
export const StyledTraitsFilterContainer = styled(Box)({
  gridArea: "e"
})
export const StyledXpFilterContainer = styled(Box)({
  gridArea: "f"
})
