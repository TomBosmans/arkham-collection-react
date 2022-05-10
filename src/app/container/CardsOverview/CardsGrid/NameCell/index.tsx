import { ImageList, ImageListItem, Popper } from "@mui/material"
import Image from "app/components/Image"
import React from "react"
import { useState, MouseEvent } from "react"
import { CardEntity } from "types"

type Props = {
  value: CardEntity["name"]
  row: CardEntity
}

export default function NameCell(props: Props) {
  const value = props.value
  const imageSrc = props.row.imageSrc
  const backImageSrc = props.row.backImageSrc
  const isFlipped = ["Investigator", "Act", "Agenda"].includes(
    props.row.typeName
  )
  const width = isFlipped ? 419 : 300
  const height = isFlipped ? 300 : 419
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const onMouseOver = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const onMouseOut = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(false)
  }

  return (
    <>
      <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {value}
      </div>
      <Popper open={open} anchorEl={anchorEl} placement={"right-start"}>
        <ImageList cols={2} gap={8}>
          <ImageListItem>
            <Image
              width={width}
              height={height}
              src={`${process.env.REACT_APP_ARKHAM_COLLECTION_BASE_URL}${imageSrc}`}
              alt={value}
            />
          </ImageListItem>

          {backImageSrc && (
            <ImageListItem>
              <Image
                width={width}
                height={height}
                src={`${process.env.REACT_APP_ARKHAM_COLLECTION_BASE_URL}${backImageSrc}`}
                alt={value}
              />
            </ImageListItem>
          )}
        </ImageList>
      </Popper>
    </>
  )
}
