import PropTypes from 'prop-types';
import './cover.scss';

const DEFAULT_COVER_URL = 'http://death.fm/images/logos/dfm_logo-200x200.png';

const Cover = ({ url, active }) => {
  return (
    <img className={active ? 'cover active' : 'cover'} src={url || DEFAULT_COVER_URL} alt="" />
  );
};

Cover.propTypes = {
  url: PropTypes.string,
  active: PropTypes.bool,
};

export { Cover };
