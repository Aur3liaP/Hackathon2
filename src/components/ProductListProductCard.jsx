import "./styles/ProductListProductCard.css"
import Button from "./Button";
import TV from "../assets/tv(API).png"
function ProductListProductCard() {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__image">
          <img src={TV} alt="" />
        </div>
        <div className="card__infos">
          <div className="card__text">
            <p className="card__article">Ordinateur</p>
            <p className="card__price">899 F</p>
          </div>
          <Button text="Acheter !" className={"button"}/>
        </div>
      </div>
    </div>
  )
}

export default ProductListProductCard
