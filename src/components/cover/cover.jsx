import PropTypes from 'prop-types';
import './cover.scss';

const DEFAULT_COVER_URL = 'http://death.fm/images/logos/dfm_logo-200x200.png';

const Cover = ({ url, alt }) => {
  return (
    <img
      className="cover"
      src={url || DEFAULT_COVER_URL}
      alt=""
      onError={(e) => (e.target.src = alt)}
    />
  );
};

Cover.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};

export { Cover };
