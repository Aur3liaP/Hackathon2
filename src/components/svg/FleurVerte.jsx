import PropTypes from 'prop-types';

function FleurVerte({ height, width, className }) {

    return (
      <>
        <svg className={className} width={width} height={height} viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.3603 40.7301C95.8832 26.9118 81.3081 1.6748 43.6006 39.4103C81.328 1.6748 56.0764 -12.8834 42.281 38.6503C56.0964 -12.8834 26.9461 -12.8834 40.7415 38.6503C26.9261 -12.9034 1.69444 1.6748 39.4019 39.3903C1.69444 1.6748 -12.8807 26.9118 38.6422 40.7301C-12.8807 26.9118 -12.8807 56.0682 38.6422 42.2699C-12.8807 56.0882 1.69444 81.3252 39.4019 43.5897C1.67445 81.3252 26.9261 95.8834 40.7215 44.3497C26.9061 95.8834 56.0564 95.8834 42.261 44.3497C56.0764 95.8834 81.3081 81.3052 43.5806 43.5897C81.3081 81.3252 95.8632 56.0682 44.3403 42.2699C95.8832 56.0682 95.8832 26.9118 44.3603 40.7301Z" fill="#00EB90"/>
        </svg>
      </>
    )
  }
  
  export default FleurVerte

  FleurVerte.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
  };