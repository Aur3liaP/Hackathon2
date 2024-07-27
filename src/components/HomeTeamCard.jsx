import { gsap } from "gsap/gsap-core"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './styles/HomeTeamCard.css'
import FleurVerte from './svg/FleurVerte'
import Ressort from './svg/Ressort';
import Lorys from '../assets/LorysTeam.jpg'
import Flo from '../assets/Flo.jpg'
import Jordan from '../assets/jordan.png'
import Thomas from '../assets/thomas.png'
import Aurelia from '../assets/aurelia.png'
import Romain from '../assets/romain.jpg'
import Abdou from '../assets/abdoupunk.jpg'
import TeamCard from './TeamCard'

const team = [
    { id: 1, name: "Lorys Lellouche", img: Lorys, description:"P'tit kiffos" },
    { id: 2, name: "Romain Alastor", img: Romain, description:"Chacal & Œil de faucon"  },
    { id: 3, name: "Thomas Dziurdzi", img: Thomas, description:"Macron jeunes années"  },
    { id: 4, name: "Jordan Thivault", img: Jordan, description:"Cuir moustache" },
    { id: 5, name: "Aurelia Pic", img: Aurelia, description:"Bichette" },
    { id: 6, name: "Florian Schaessens", img: Flo, description:"Prince des poulets en interim"  },
    { id: 6, name: "Abdou", img: Abdou, description:"Chicken Lord"  },
  ];


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function HomeTeamCard() {


  const flower = elem => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 800,
        rotation: 0
      },
      {
        opacity: 1,
        x: 0,
        rotation: -540,
        duration: 1.5,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          // end: "bottom center",
          // scrub: true,
          // markers: true,
          // id: "flower",
        },
      },
    )
  }


  useEffect(() => {
    flower(".teamCard__fleur");
  }, []);



    return (
    <section className='teamCard'>
      <div className='teamCard__container'>
        <div className='teamCard__title'>
            <h2 className='teamCard__h2' id='Team1'> Notre équipe de choc !</h2>
            <FleurVerte width={83} height={83} className="teamCard__fleur"/>
        </div>
        <div className='teamCard__cardsContainer'>
        <Ressort width={240} height={150} className='teamCard__ressort'/>
        {team.map((person) => (
        <TeamCard key={person.id} imgSrc={person.img} name={person.name} description={person.description}/>
        ))}
        </div>
      </div>
    </section>
    )
  }
  
  export default HomeTeamCard
  