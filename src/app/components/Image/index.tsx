import { Skeleton } from "@mui/material"
import { useState } from "react"

type Props = {
  src: string
  alt: string
  width: number
  height: number
}
export default function Image(props: Props) {
  const { src, alt, width, height } = props
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={width}
          height={height}
        />
      )}
      <img
        hidden={isLoading}
        width={width}
        height={height}
        src={src}
        onLoadCapture={() => setLoading(false)}
        alt={alt}
      />
    </>
  )
}
