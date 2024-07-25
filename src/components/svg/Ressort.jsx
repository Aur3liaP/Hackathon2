import PropTypes from 'prop-types';

function Ressort({ height, width, className  }) {

    return (
      <>
        <svg className={className} width={width} height={height} viewBox="0 0 331 183" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M328.622 50.9718C316.591 17.8501 290.779 -3.16691 270.97 4.02856C251.16 11.224 244.854 43.9073 256.884 77.0289C263.627 95.5911 275.89 108.17 284.276 105.124C292.662 102.078 293.994 84.5608 287.252 65.9986C275.221 32.8769 249.409 11.8599 229.6 19.0554C209.79 26.2509 203.483 58.9343 215.514 92.0559C222.256 110.618 234.52 123.197 242.906 120.151C251.292 117.105 252.624 99.5876 245.882 81.0254C233.851 47.9037 207.941 26.9226 188.009 34.1621C168.078 41.4017 161.673 74.1209 173.704 107.243C180.446 125.805 192.71 138.383 201.096 135.337C209.482 132.291 210.813 114.775 204.071 96.2123C192.04 63.0906 166.229 42.0734 146.419 49.2689C126.609 56.4644 120.304 89.1474 132.335 122.269C139.077 140.831 151.34 153.41 159.726 150.364C168.112 147.318 169.444 129.801 162.702 111.239C150.671 78.1171 124.859 57.1004 105.049 64.2959C85.2389 71.4914 78.9333 104.174 90.9641 137.296C97.7064 155.858 109.97 168.437 118.355 165.391C126.741 162.345 128.074 144.828 121.331 126.266C109.301 93.1441 83.4882 72.1273 63.6796 79.3224C43.8697 86.5179 37.5629 119.201 49.5936 152.323C56.336 170.885 68.6 183.464 76.986 180.418C85.3708 177.372 86.7032 159.855 79.9609 141.293C67.9301 108.171 42.0205 87.1896 22.0894 94.4292C2.15824 101.669 -4.24714 134.388 7.78361 167.51" stroke="black" strokeWidth="3.38" strokeLinecap="round"/>
        </svg>
      </>
    )
  }
  
  export default Ressort

  Ressort.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
  };