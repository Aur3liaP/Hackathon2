import RondSoleilSVG from "./svg/RondSoleilSVG"
import DoublePlaySVG from "./svg/DoublePlaySVG"
import SquigglyArrow from "./svg/SquigglyArrow"
import "./styles/HomeHero.css"
import { gsap } from "gsap"
import minitel from "../assets/minitel2API.png"
import Button from "./Button"
import { useEffect } from "react"



function HomeHero() {

  const animateArrow = elem => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -400,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
    )
  }

  useEffect(() => {
    animateArrow(".doubleplay-arrow1")
  }, [])


  return (
    <section className="homehero">
      <div className="homehero__container">
        <div className="homehero__text-container">
          <h1 className="homehero__title">Découvrez le Minitel</h1>
          <p className="homehero__paragraphe">
            Transformez votre manière de communiquer et d&apos;accéder à
            l&apos;information avec le Minitel, l&apos;innovation technologique
            française qui change la donne. Imaginez un monde où vous pouvez
            accéder instantanément à une multitude de services depuis le confort
            de votre domicile.
          </p>
          <p className="homehero__paragraphe">
            Avec le Minitel, c&apos;est désormais possible !
          </p>
        </div>
        <div className="homehero__image-container">
          <img src={minitel} alt="le minitel" className="homehero__image" />
          <RondSoleilSVG className="homehero__sun-SVG" />
          <DoublePlaySVG className="homehero__double-playSVG" />
        </div>
      </div>
      <div className="homehero__button-container">
        <Button text="J'achète !" className="homehero__button" />
        <SquigglyArrow className="homehero__arrow-SVG" />
      </div>
    </section>
  )
}

export default HomeHero
