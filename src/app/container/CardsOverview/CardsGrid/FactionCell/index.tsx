import Chip from "@mui/material/Chip"
import { CardEntity } from "types"
import { classColor } from "./utils"

type Props = {
  value: CardEntity["factionName"]
}

export default function FactionCell({ value }: Props) {
  return <Chip label={value} color={classColor(value)} variant="outlined" />
}
