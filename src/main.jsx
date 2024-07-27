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
import Login from "./pages/Login"

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
        loader: () => getData("https://cybermart-api.netlify.app/items"),
      },
      {
        path: "/product-showcase/:id",
        element: <PageShowcase />,
        loader: ({ params }) =>
          getData(`https://cybermart-api.netlify.app/items/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => getData("https://cybermart-api.netlify.app/items"),
      },
      {
        path: "/login",
        element: <Login />,
        loader: () => getData(`https://cybermart-api.netlify.app/users`),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
