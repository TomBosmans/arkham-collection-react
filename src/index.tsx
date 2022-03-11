import React from "react"
import ReactDOM from "react-dom"
import { store } from "./app/store"
import { Provider } from "react-redux"
import Router from "./app/routes/router"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
