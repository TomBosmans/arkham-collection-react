import { Theme } from "@mui/material"

type MinHeight = {
  minHeight: number
}

export default function appBarHeight(theme: Theme): number {
  const { mixins: { toolbar }, breakpoints } = theme
  const toolbarDesktopQuery = breakpoints.up("sm")
  return (toolbar[toolbarDesktopQuery] as MinHeight).minHeight
}
