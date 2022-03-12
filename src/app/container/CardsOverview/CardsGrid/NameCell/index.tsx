import { Popper } from "@mui/material"
import { useState, MouseEvent } from "react"

type Props = {
  value: string
  row: { imagesrc: string }
}

export default function NameCell(props: Props) {
  const value = props.value
  const imagesrc = props.row.imagesrc
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
        <img src={`https://arkhamdb.com/${imagesrc}`} alt={value} />
      </Popper>
    </>
  )
}
