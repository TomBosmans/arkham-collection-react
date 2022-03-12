import { Container } from "@mui/material"
import LayoutAppBar from "./AppBar"

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <LayoutAppBar />
      <Container>{children}</Container>
    </main>
  )
}
