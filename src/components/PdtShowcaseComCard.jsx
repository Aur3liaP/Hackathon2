import "./styles/PdtShowcaseComCard.css"
import PropTypes from 'prop-types';
import avatar from "../assets/avataaars.png"

function PdtShowcaseComCard({clientName, commentary}) {

  return (
    <>
    <div className='PdtShowcaseComCard__container'>
    <img className='PdtShowcaseComCard__img' src={avatar} alt="avatar" />
        <div className='PdtShowcaseComCard__info'>
            <p className='PdtShowcaseComCard__title'>{clientName}</p>
            <p className='PdtShowcaseComCard__com'>{commentary}</p>
        </div>
     </div>
    </>
  )
}

PdtShowcaseComCard.propTypes = {
    clientName: PropTypes.string.isRequired,
    commentary: PropTypes.string.isRequired,
  };

export default PdtShowcaseComCard;
