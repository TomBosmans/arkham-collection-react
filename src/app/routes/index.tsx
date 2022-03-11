import { Navigate } from "react-router-dom"
import Home from "./Home"
import { RouteObject } from "./router"

const routes: RouteObject[] = [
  {
    component: () => <Navigate to="/home" />,
    path: "*"
  },
  {
    component: Home,
    path: "/home"
  }
]

export default routes
