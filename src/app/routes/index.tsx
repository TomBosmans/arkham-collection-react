import CardsOverview from "app/container/CardsOverview"
import Layout from "app/container/Layout"
import { Navigate } from "react-router-dom"
import { RouteObject } from "./router"

const routes: RouteObject[] = [
  {
    component: () => <Navigate to="/cards" />,
    path: "*"
  },
  {
    component: CardsOverview,
    path: "/cards",
    layout: Layout
  }
]

export default routes
