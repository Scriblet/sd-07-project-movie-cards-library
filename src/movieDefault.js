import PropTypes from 'prop-types';

const movieDefault = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
});

export default movieDefault;
