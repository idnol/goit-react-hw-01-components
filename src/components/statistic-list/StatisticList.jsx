import { Statistic } from '../statistic-item/Statistic';

const StatisticList = ({statistics}) => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {statistics.map(el => (
        <li className="item" key={el.id}>
          <Statistic
            label = {el.label}
            percentage = {el.percentage}
          />
        </li>
      ))}
    </ul>
  </section>
)

export { StatisticList }
