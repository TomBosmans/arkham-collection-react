import { StyledChip } from "./style"

type Props = {
  value: string
}

export default function TraitsCell({ value }: Props) {
  const traits = value.split(",")
  return (
    <>
      {traits.map((trait, key) => {
        if (!trait) return null
        return (
          <StyledChip key={key} label={trait} size="small" variant="outlined" />
        )
      })}
    </>
  )
}
