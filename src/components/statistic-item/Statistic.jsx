import PropTypes from 'prop-types';

const Statistic = ({label, percentage}) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </>
);

Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export { Statistic }
