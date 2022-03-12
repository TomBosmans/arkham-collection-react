import Chip from "@mui/material/Chip"
import { classColor } from "./utils"

type Props = {
  value: string
}

export default function FactionCell({ value }: Props) {
  return <Chip label={value} color={classColor(value)} variant="outlined" />
}
