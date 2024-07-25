import { Link } from "react-router-dom"
import "./styles/Navbar.css"
import HomeLogoSvg from "./svg/HomeLogoSvg"
import BasketLogoSvg from "./svg/BasketLogoSvg"

export default function Navbar() {
  return (
    <div className="navbar__container">
      <nav>
        <section className="navbar__left">
          <Link to="/" className="navbar__left__home">
            <HomeLogoSvg width="124" />
            <span>CyberMart</span>
          </Link>
          <section className="navbar__left__pages">
            <span>Accueil</span>
            <span>L&apos;équipe</span>
            <span>Nos Produits</span>
          </section>
        </section>
        <section className="navbar__right">
          <Link to="/cart" className="navbar_right__links">
            <span>PANIER</span>
            <BasketLogoSvg width="80" />
          </Link>
        </section>
      </nav>
    </div>
  )
}
