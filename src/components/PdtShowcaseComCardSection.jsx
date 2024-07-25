import { checkPropTypes, PropTypes } from "prop-types"
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
            {commentsArray.map((comment, index) => (
              <PdtShowcaseComCard
                key={index}
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
  item: checkPropTypes.shape({
    client_commentary: PropTypes.objectOf(
      PropTypes.shape({
        client_name: PropTypes.string.isRequired,
        commentary: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
}

export default PdtShowcaseComCardSection
