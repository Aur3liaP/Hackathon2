import { PropTypes } from "prop-types"

export default function PrixSvg({ width = "222", height = "222", price }) {
  return (
    <div className="price__svg__container">
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 222"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-32deg)" }}
      >
        <path
          d="M100 1.36131L122.996 48.1958L123.226 48.6636L123.721 48.5017L169.848 33.4245L156.239 84.7223L156.123 85.1568L156.508 85.3895L198.841 111L156.508 136.611L156.123 136.843L156.239 137.278L169.848 188.576L123.721 173.498L123.226 173.336L122.996 173.804L100 220.639L77.0035 173.804L76.7739 173.336L76.2785 173.498L30.1524 188.576L43.7613 137.278L43.8766 136.843L43.492 136.611L1.15914 111L43.492 85.3895L43.8766 85.1568L43.7613 84.7223L30.1524 33.4245L76.2785 48.5017L76.7739 48.6636L77.0035 48.1958L100 1.36131Z"
          fill="#7FA6BC"
          stroke="black"
          strokeWidth="1.2"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fill="white"
        >
          Seulement {price}F !
        </text>
      </svg>
    </div>
  )
}

PrixSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  price: PropTypes.number,
}
