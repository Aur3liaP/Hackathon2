import './styles/HomeTeamCard.css'
import FleurVerte from './svg/FleurVerte'
import Ressort from './svg/Ressort';
import Lorys from '../assets/LorysTeam.jpg'
import Flo from '../assets/Flo.jpg'
import Jordan from '../assets/jordan.png'
import Thomas from '../assets/thomas.png'
import Aurelia from '../assets/aurelia.png'
import TeamCard from './TeamCard'

const team = [
    { id: 1, name: "Lorys Lellouche", img: Lorys, description:"P'tit kiffos" },
    { id: 2, name: "Romain Alastor", img: Lorys, description:"Chacal"  },
    { id: 3, name: "Thomas Dziurdzi", img: Thomas, description:"Artiste Figma"  },
    { id: 4, name: "Jordan Thivault", img: Jordan, description:"Cuir moustache" },
    { id: 5, name: "Aurelia Pic", img: Aurelia, description:"Bichette" },
    { id: 6, name: "Florian Schaessens", img: Flo, description:"Prince des poulets en interim"  },
  ];

function HomeTeamCard() {

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
  