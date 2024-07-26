import { useLoaderData } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./styles/ProductList.css"
import ProductListProductCard from "../components/ProductListProductCard"
import Navbar from "../components/Navbar"
import Spirale from "../components/svg/Spirale"
import { gsap } from "gsap"
import { useEffect } from "react"

function ProductList() {
  const items = useLoaderData()
  const navigate = useNavigate()
  console.info(items)

  const spiral = elem => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 800,
        rotation: 0
      },
      {
        opacity: 1,
        x: 0,
        rotation: -540,
        duration: 1.5,
      },
    )
  }

  useEffect(() => {
    spiral(".product__list-spirale")
  }, [])

  const handleCardClick = (id) => {
    window.scrollTo(0, 0)
    navigate(`/product-showcase/${id}`)
  }

  return (
    <>
      <div className="product__list__container">
        <Navbar />
        <div className="product__list">
          <h2 className="product__list__title">Nos dernières trouvailles!</h2>
          
            <div className="product__list__products__wrapper">
              {items.map(item => (
                <ProductListProductCard key={item.id} item={item} onClick={() => handleCardClick(item.id)}/>
              ))}
            </div>
          
        </div>
      </div>
    </>
  )
}

export default ProductList
