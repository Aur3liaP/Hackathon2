import ShowcaseHero from "../components/ShowcaseHero"
import Navbar from "../components/Navbar"
import "./styles/PageShowcase.css"
import PdtShowcaseComCardSection from "../components/PdtShowcaseComCardSection"
import { useLoaderData } from "react-router-dom"

export default function PageShowcase() {
  const item = useLoaderData()

  return (
    <div className="Page__showcase__container">
      <Navbar />
      <ShowcaseHero item={item} />
      <PdtShowcaseComCardSection item={item} />
    </div>
  )
}
