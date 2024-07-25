import PropTypes from 'prop-types';

function TeamCard({imgSrc, name, description}) {

    return (
    <div>
        <div className='teamCard__cards'>
            <div className='teamCard__cardsImgContainer'>
                <img className='teamCard__cardsImg' src={imgSrc} alt={name}/>
            </div>
            <div className='teamCard__cardsTexteContainer'>
                <h3 className='teamCard__cardsh3'>{name}</h3>
                <p className='teamCard__cardsp'>{description}</p>
            </div>
        </div>
      </div>
    )
  }
  
  export default TeamCard
  
TeamCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };