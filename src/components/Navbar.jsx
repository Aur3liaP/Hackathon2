import { Link } from "react-router-dom"
import "./styles/Navbar.css"
import HomeLogoSvg from "./svg/HomeLogoSvg"
import BasketLogoSvg from "./svg/BasketLogoSvg"
import MenuBurgerSvg from "./svg/MenuBurgerSvg"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"

export default function Navbar() {
  const [displayBurger, setDisplayBurger] = useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  })
  const isMobile = useMediaQuery({
    query: "(max-width: 899px)",
  })

  const handleBurger = () => {
    setDisplayBurger(!displayBurger)
  }

  return (
    <div className="navbar__container">
      {isDesktopOrLaptop && (
        <nav>
          <section className="navbar__left">
            <Link to="/" className="navbar__left__home">
              <HomeLogoSvg width="124" />
              <span>CyberMart</span>
            </Link>
            <section className="navbar__left__pages">
              <a href="/#Team1">
                <span>L&apos;équipe</span>
              </a>
              <Link to="/products">
                <span>Nos Produits</span>
              </Link>
              <Link to="/login">
                <span>Se Connecter</span>
              </Link>
            </section>
          </section>

          <section className="navbar__right">
            <div className="navbar__right--desktop">
              <Link to="/cart">
                <span className="navbar__right__link">PANIER</span>
              </Link>
              <Link to="/cart">
                <BasketLogoSvg width="50" height="50"/>
              </Link>
            </div>
          </section>
        </nav>
      )}
      {isMobile && (
        <div>
          <nav>
            <section className="navbar__mobile">
              <div className="navbar__mobile__home__container">
                <Link to="/" className="navbar__mobile__home">
                  <HomeLogoSvg width="124" />
                </Link>
                <span className="navbar__mobile__title">CyberMart</span>
              </div>
              <button type="button" onClick={handleBurger}>
                <MenuBurgerSvg width="42" />
              </button>
            </section>
          </nav>

          <div
            className={
              displayBurger
                ? "navbar__mobile__burger--open"
                : "navbar__mobile__burger--closed"
            }
          >
            <Link to="/">
              <span>Accueil</span>
            </Link>
            <a href="/#Team1">
                <span>L&apos;équipe</span>
              </a>
            <Link to="/products">
              <span>Nos Produits</span>
            </Link>
            <Link to="/login">
              <span>Se Connecter</span>
            </Link>
            <Link to="/cart">
              <span>Panier</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
