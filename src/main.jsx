import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import axios from "axios"
import Home from "./pages/Home"
// import ProductShowcase from "./pages/ProductShowcase"
import ProductList from "./pages/ProductList"
import PageShowcase from "./pages/PageShowcase"
// import ProductList from "./pages/ProductList"
import Cart from "./pages/Cart"
import "./index.css"
import App from "./components/App"
import Login from "./pages/Login"

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
        path: "/products",
        element: <ProductList />,
        loader: () => getData("http://localhost:3310/items"),
      },
      {
        path: "/product-showcase/:id",
        element: <PageShowcase />,
        loader: ({ params }) =>
          getData(`http://localhost:3310/items/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
