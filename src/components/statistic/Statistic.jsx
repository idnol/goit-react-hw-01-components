import PropTypes from 'prop-types';
import css from './Statistic.module.css'

const Statistic = ({label, percentage}) => (
  <>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
  </>
);

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export { Statistic }
