import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { getData } from "./functions/getData"
import Home from "./pages/Home"
// import ProductShowcase from "./pages/ProductShowcase"
import ProductList from "./pages/ProductList"
import PageShowcase from "./pages/PageShowcase"
// import ProductList from "./pages/ProductList"
import Cart from "./pages/Cart"
import "./index.css"
import App from "./components/App"

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
        loader: () => getData("http://localhost:3310/items"),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
