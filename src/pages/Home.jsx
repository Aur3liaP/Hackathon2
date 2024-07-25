import HomeHero from "../components/HomeHero"
import HomeProductSection from "../components/HomeProductSection"
import HomeTeamCard from "../components/HomeTeamCard"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <HomeProductSection />
      <HomeTeamCard />
    </main>
  )
}

export default Home
