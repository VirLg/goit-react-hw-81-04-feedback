import PropTypes from 'prop-types';

const StatisticElement = ({ props }) => {
  return (
    <>
      <button type="button" name="good" onClick={props}>
        Good
      </button>
      <button type="button" name="neutral" onClick={props}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={props}>
        Bad
      </button>
    </>
  );
};

export default StatisticElement;
StatisticElement.propTypes = {
  props: PropTypes.func.isRequired,
};
