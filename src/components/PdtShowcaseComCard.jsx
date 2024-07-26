import "./styles/PdtShowcaseComCard.css";
import PropTypes from "prop-types";
import avatar from "../assets/avataaars.png";
import avatar1 from "../assets/avataaars (1).png";
import avatar2 from "../assets/avataaars (2).png";
import avatar3 from "../assets/avataaars (3).png";
import avatar4 from "../assets/avataaars (4).png";

function PdtShowcaseComCard({ client_name, commentary }) {

  const avatars = [avatar, avatar1, avatar2, avatar3, avatar4];

  function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  }

  const randomAvatar = getRandomAvatar();

  return (
    <div className="PdtShowcaseComCard__container">
      <img className="PdtShowcaseComCard__img" src={randomAvatar} alt="avatar" />
      <div className="PdtShowcaseComCard__info">
        <p className="PdtShowcaseComCard__title">{client_name}</p>
        <p className="PdtShowcaseComCard__com">{commentary}</p>
      </div>
    </div>
  );
}

PdtShowcaseComCard.propTypes = {
  client_name: PropTypes.string.isRequired,
  commentary: PropTypes.string.isRequired,
};

export default PdtShowcaseComCard;