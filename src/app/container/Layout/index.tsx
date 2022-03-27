import LayoutAppBar from "./AppBar"
import { StyledContent, StyledMain } from "./style"

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <StyledMain>
      <LayoutAppBar />
      <StyledContent>{children}</StyledContent>
    </StyledMain>
  )
}
