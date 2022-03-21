import { Box } from "@mui/material"
import NameFilter from "./NameFilter"
import TraitsFilter from "./TraitsFilter"

export default function CardsFilter() {
  return (
    <Box display={"flex"}>
      <Box flex={1}>
        <NameFilter />
      </Box>
      <Box flex={2}>
        <TraitsFilter />
      </Box>
    </Box>
  )
}
