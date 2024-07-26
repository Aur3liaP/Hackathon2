import { PropTypes } from "prop-types"
import PdtShowcaseComCard from "./PdtShowcaseComCard"
import "./styles/PdtShowcaseComCardSection.css"

function PdtShowcaseComCardSection({ item }) {
  console.info(item.client_commentary)
  const commentsArray = Object.values(item.client_commentary)
  return (
    <>
      <div className="pdtShowcaseComCardSection__background">
        <div className="pdtShowcaseComCardSection__container">
          <h2 className="pdtShowcaseComCardSection__title">Ils en parlent !</h2>
          <div className="pdtShowcaseComCardSection__list">
            {commentsArray.map((comment, client_name) => (
              <PdtShowcaseComCard
                key={client_name}
                client_name={comment.client_name}
                commentary={comment.commentary}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

PdtShowcaseComCardSection.propTypes = {
  item: PropTypes.shape({
      client_commentary: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.array
      ]).isRequired,
  }).isRequired,
};

export default PdtShowcaseComCardSection
