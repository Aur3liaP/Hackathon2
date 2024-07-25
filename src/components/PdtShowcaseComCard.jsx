import "./styles/PdtShowcaseComCard.css"
import PropTypes from 'prop-types';
import avatar from "../assets/avataaars.png"

function PdtShowcaseComCard({client_name, commentary}) {

  return (
    <>
    <div className='PdtShowcaseComCard__container'>
    <img className='PdtShowcaseComCard__img' src={avatar} alt="avatar" />
        <div className='PdtShowcaseComCard__info'>
            <p className='PdtShowcaseComCard__title'>{client_name}</p>
            <p className='PdtShowcaseComCard__com'>{commentary}</p>
        </div>
     </div>
    </>
  )
}

PdtShowcaseComCard.propTypes = {
    client_name: PropTypes.string.isRequired,
    commentary: PropTypes.string.isRequired,
  };

export default PdtShowcaseComCard;
