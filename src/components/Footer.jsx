import HomeLogoSvg from "./svg/HomeLogoSvg"
import "./styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-container">
          <HomeLogoSvg />
          <span className="footer__logo-name">CyberMart</span>
        </div>
        <div className="footer__text-container">
          <span>Tous droits réservés.</span>
          <span className="footer__text-small">
            Sauf pour tous les trucs qu&apos;on a &apos;empruntés&apos; sur
            internet.
          </span>
          <span className="footer__text-small">Bisous.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
