// import { Link } from "react-router-dom"
import "./styles/ShowcaseHero.css"
import SmileySvg from "./svg/SmileySvg"
import PrixSvg from "./svg/PrixSvg"
import placeholder_image from "../assets/minitel2API.png"
import RondSoleilSVG from "./svg/RondSoleilSVG"
import { useMediaQuery } from "react-responsive"

export default function ShowcaseHero() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 640px)",
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  })

  return (
    <section className="showcase__hero__container">
      {isDesktop && (
        <div>
          <div className="showcase__hero__title">
            <h1>Le Minitel !</h1>
            <div className="showcase__hero__title__smiley">
              <SmileySvg />
            </div>
          </div>
          <section className="showcase__hero__grid">
            <div className="showcase__hero__grid__left">
              <img src={placeholder_image} alt="" />
              <div className="showcase__hero__grid__left__price">
                <PrixSvg width="300" height="300" />
              </div>
            </div>
            <div className="showcase__hero__grid__right">
              <div className="showcase__hero__grid__right__title__container">
                <h2 className="showcase__hero__grid__right__title">
                  Pourquoi Minitel ?
                </h2>
                <div className="showcase__hero__grid__right__svg">
                  <RondSoleilSVG />
                </div>
              </div>
              <p className="showcase__hero__grid__right__paragraph">
                Transformez votre manière de communiquer et d&apos;accéder à
                l&apos;information avec le Minitel, l&apos;innovation
                technologique française qui change la donne. Imaginez un monde
                où vous pouvez accéder instantanément à une multitude de
                services depuis le confort de votre domicile. Avec le Minitel,
                c&apos;est désormais possible !
              </p>
              <button className="showcase__hero__grid__right__buy">
                <span className="showcase__hero__grid__right__buy__text">
                  Acheter
                </span>
              </button>
            </div>
          </section>
        </div>
      )}
      {isMobile && (
        <div className="showcase__hero__container--mobile">
          <div className="showcase__hero__title--mobile">
            <h1>Le Minitel !</h1>
            <div className="showcase__hero__title__smiley">
              <SmileySvg height="50" width="50" />
            </div>
          </div>
          <section className="showcase__hero__grid--mobile">
            <div className="showcase__hero__grid__left">
              <img src={placeholder_image} alt="" />
              <div className="showcase__hero__grid__left__price">
                <PrixSvg width="200" height="200" />
              </div>
            </div>
            <div className="showcase__hero__grid__right">
              <div className="showcase__hero__grid__right__title__container">
                <h2 className="showcase__hero__grid__right__title">
                  Pourquoi Minitel ?
                </h2>
                <div className="showcase__hero__grid__right__svg">
                  <RondSoleilSVG height="100" width="100" />
                </div>
              </div>
              <p className="showcase__hero__grid__right__paragraph">
                Transformez votre manière de communiquer et d&apos;accéder à
                l&apos;information avec le Minitel, l&apos;innovation
                technologique française qui change la donne. Imaginez un monde
                où vous pouvez accéder instantanément à une multitude de
                services depuis le confort de votre domicile. Avec le Minitel,
                c&apos;est désormais possible !
              </p>
              <button className="showcase__hero__grid__right__buy">
                <span className="showcase__hero__grid__right__buy__text">
                  Acheter
                </span>
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}
