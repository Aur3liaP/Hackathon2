// import { Link } from "react-router-dom"
import "./styles/ShowcaseHero.css"
import SmileySvg from "./svg/SmileySvg"
import PrixSvg from "./svg/PrixSvg"
import RondSoleilSVG from "./svg/RondSoleilSVG"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"
import { checkPropTypes, PropTypes } from "prop-types"

export default function ShowcaseHero({ item }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 640px)",
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  })

  // console.info(item)

  return (
    <section className="showcase__hero__container">
      {isDesktop && (
        <div>
          <div className="showcase__hero__title">
            <h1>{item.name}</h1>
            <div className="showcase__hero__title__smiley">
              <SmileySvg />
            </div>
          </div>
          <section className="showcase__hero__grid">
            <div className="showcase__hero__grid__left">
              <img src={item.image} alt="" />
              <div className="showcase__hero__grid__left__price">
                <PrixSvg width="300" height="300" price={item.price} />
              </div>
            </div>
            <div className="showcase__hero__grid__right">
              <div className="showcase__hero__grid__right__title__container">
                <h2 className="showcase__hero__grid__right__title">
                  Pourquoi {item.name} ?
                </h2>
                <div className="showcase__hero__grid__right__svg">
                  <RondSoleilSVG />
                </div>
              </div>
              <p className="showcase__hero__grid__right__paragraph">
                {item.description} <br />
                {item.sales_pitch}
              </p>
              <Link to={"/cart"}>
                <button className="showcase__hero__grid__right__buy">
                  <span className="showcase__hero__grid__right__buy__text">
                    Acheter
                  </span>
                  <span className="showcase__hero__grid__right__buy__prix">
                    {item.price}F
                  </span>
                </button>
              </Link>
            </div>
          </section>
        </div>
      )}
      {isMobile && (
        <div className="showcase__hero__container--mobile">
          <div className="showcase__hero__title--mobile">
            <h1>{item.name}</h1>
            <div className="showcase__hero__title__smiley">
              <SmileySvg height="50" width="50" />
            </div>
          </div>
          <section className="showcase__hero__grid--mobile">
            <div className="showcase__hero__grid__left">
              <img src={item.image} alt="" />
              <div className="showcase__hero__grid__left__price">
                <PrixSvg width="200" height="200" price={item.price} />
              </div>
            </div>
            <div className="showcase__hero__grid__right">
              <div className="showcase__hero__grid__right__title__container">
                <h2 className="showcase__hero__grid__right__title">
                  Pourquoi {item.name} ?
                </h2>
                <div className="showcase__hero__grid__right__svg">
                  <RondSoleilSVG height="100" width="100" />
                </div>
              </div>
              <p className="showcase__hero__grid__right__paragraph">
                {item.description} <br />
                {item.sales_pitch}
              </p>
              <Link to={"/cart"}>
                <button className="showcase__hero__grid__right__buy">
                  <span className="showcase__hero__grid__right__buy__text">
                    Acheter
                  </span>
                  <span className="showcase__hero__grid__right__buy__prix">
                    {item.price}F
                  </span>
                </button>
              </Link>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}

ShowcaseHero.propTypes = {
  item: checkPropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    sales_pitch: PropTypes.string.isRequired,
  }).isRequired,
}
