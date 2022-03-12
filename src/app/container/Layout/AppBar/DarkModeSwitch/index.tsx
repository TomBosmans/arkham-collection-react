import { useEffect, useState } from "react"
import { StyledSwitch } from "./style"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { selectDarkMode } from "../../selectors"
import { setDarkMode } from "../../slice"

export default function DarkModeSwitch() {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)
  const [checked, setChecked] = useState(darkMode)
  const onChange = () => setChecked(!checked)

  useEffect(() => {
    setTimeout(() => dispatch(setDarkMode(checked)), 5)
  }, [checked, dispatch])

  return (
    <StyledSwitch checked={checked} onChange={onChange} />
  )
}
