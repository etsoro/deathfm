import PropTypes from 'prop-types';
import './background.scss';

const Background = ({ url }) => {
  return <img className="background" src={url} alt="" />;
};

Background.propTypes = {
  url: PropTypes.string,
};

export { Background };
