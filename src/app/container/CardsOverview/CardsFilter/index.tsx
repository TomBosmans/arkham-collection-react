import { Box } from "@mui/material"
import TraitsFilter from "./TraitsFilter"

export default function CardsFilter() {
  return (
    <Box
      component={"div"}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" }
      }}
    >
      <TraitsFilter />
    </Box>
  )
}
