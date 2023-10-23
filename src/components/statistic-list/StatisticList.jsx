import { Statistic } from '../statistic/Statistic';
import PropTypes from 'prop-types';
import css from './StatisticList.module.css'

const StatisticList = ({title, statistics}) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title ?? "Upload stats"}</h2>
    <ul className={css.statList}>
      {statistics.map(el => (
        <li
          className={css.item}
          key={el.id}
          style={{
            background: getBgColor()
          }}
        >
          <Statistic
            label = {el.label}
            percentage = {el.percentage}
          />
        </li>
      ))}
    </ul>
  </section>
)

StatisticList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
};

function getBgColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export { StatisticList }
