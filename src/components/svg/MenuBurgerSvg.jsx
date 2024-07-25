import PropTypes from "react"

export default function MenuBurgerSvg({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="25" height="25" fill="url(#pattern0_39_1584)" />
      <defs>
        <pattern
          id="pattern0_39_1584"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_39_1584" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_39_1584"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

MenuBurgerSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

// HomeLogoSvg.defaultProps = {
//   width: "124",
//   height: "124",
// }
