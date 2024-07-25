import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import axios from "axios"
import Home from "./pages/Home"
import ProductShowcase from "./pages/ProductShowcase"
import ProductList from "./pages/ProductList"
import Basket from "./pages/Basket"
import "./index.css"
import App from "./components/App"

const getData = async uri => {
  const result = await axios.get(uri)
  return result.data
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
        loader: () => getData("http://localhost:3310/items")
      },
      {
        path: "/product-showcase/:id",
        element: <ProductShowcase />,
        loader: ({params}) => getData(`http://localhost:3310/items/${params.id}`)
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
