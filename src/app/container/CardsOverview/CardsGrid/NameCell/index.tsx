import { Popper } from "@mui/material"
import { useState, MouseEvent } from "react"
import { CardEntity } from "types"

type Props = {
  value: CardEntity["name"]
  row: CardEntity
}

export default function NameCell(props: Props) {
  const value = props.value
  const imageSrc = props.row.imageSrc
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const onMouseOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const onMouseOut= (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(false)
  }

  return (
    <>
      <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{value}</div>
      <Popper open={open} anchorEl={anchorEl} placement={"right-start"}>
        <img src={`http://localhost:4000${imageSrc}`} alt={value} />
      </Popper>
    </>
  )
}
