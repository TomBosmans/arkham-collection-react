import Layout from "app/container/Layout"
import { Navigate } from "react-router-dom"
import CardRoute from "./CardRoute"
import CardsRoute from "./CardsRoute"
import { RouteObject } from "./router"

const routes: RouteObject[] = [
  {
    component: () => <Navigate to="/cards" />,
    path: "*"
  },
  {
    component: CardsRoute,
    path: "/cards",
    layout: Layout
  },
  {
    component: CardRoute,
    path: "/cards/:id"
  }
]

export default routes
