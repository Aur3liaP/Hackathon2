import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import HomeProductCard from "./ProductCard"
import "./styles/HomeProductSection.css"

function HomeProductSection() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://cybermart-api.netlify.app/items")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error))
  }, [])

  const handleCardClick = id => {
    window.scrollTo(0, 0)
    navigate(`/product-showcase/${id}`)
  }

  return (
    <>
      <div className="homePdtSection__background">
        <div className="homePdtSection__container">
          <h2 className="homePdtSection__title">Nos Produits phares !</h2>
          <div className="homePdtSection__list">
            {products.slice(0, 3).map(product => (
              <HomeProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onClick={() => handleCardClick(product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeProductSection
