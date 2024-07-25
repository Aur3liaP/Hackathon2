import './styles/HomeTeamCard.css'
import FleurVerte from './svg/FleurVerte'
import Lorys from '../assets/LorysTeam.jpg'
import TeamCard from './TeamCard'

const team = [
    { id: 1, name: "Lorys Lellouche", img: Lorys, description:"P'tit kiffos" },
    { id: 2, name: "Romain Alastor", img: Lorys, description:"Chacal"  },
    { id: 3, name: "Thomas Dziurdzi", img: Lorys, description:"Artiste Figma"  },
    { id: 4, name: "Jordan Thivault", img: Lorys, description:"Cuir moustache" },
    { id: 5, name: "Aurelia Pic", img: Lorys, description:"Bichette" },
    { id: 6, name: "Florian Schaessens", img: Lorys, description:"Prince des poulets"  },
  ];

function HomeTeamCard() {

    return (
    <div className='teamCard'>
      <div className='teamCard__container'>
        <div className='teamCard__title'>
            <h2 className='teamCard__h2' id='Team1'> Notre équipe de choc !</h2>
            <FleurVerte width={83} height={83} className="teamCard__fleur"/>
        </div>
        <div className='teamCard__cardsContainer'>
        {team.map((person) => (
        <TeamCard key={person.id} imgSrc={person.img} name={person.name} description={person.description}/>
        ))}
        </div>
      </div>
    </div>
    )
  }
  
  export default HomeTeamCard
  