import PropTypes from 'prop-types';
import './styles/HomeProductCard.css'


function HomeProductCard({ nom, prix, image }) {

  return (
    <>
     <div className='pdtcard__container'>
        <div className='pdtcard__info'>
        <p className='pdtcard__title'>{nom}</p>
        <p className='pdtcard__price'>{prix} F</p>
        <button className='pdtcard__button'> J'achète !</button>
        </div>
        <img className='pdtcard__img' src={image} alt={nom} />
     </div>
    </>
  );
}

HomeProductCard.propTypes = {
    nom: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

export default HomeProductCard;
