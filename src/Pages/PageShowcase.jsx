import ShowcaseHero from "../components/ShowcaseHero"
import Navbar from "../components/Navbar"
import "./styles/PageShowcase.css"

export default function PageShowcase() {
  return (
    <div className="Page__showcase__container">
      <div className="invisible">invisible</div>
      <Navbar />
      <ShowcaseHero />
    </div>
  )
}
