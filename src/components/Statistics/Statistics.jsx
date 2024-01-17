import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types'
function createColor() {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
}

const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

  <ul className={css.stat_list}>
            {stats.map(({ id, label, percentage }) => {
                return (<li className={css.stats} key={id} style={{ backgroundColor: createColor() }}>
                    <span className={css.label}>{label}:</span>
                    <span className={css.percentage}>{percentage}%</span>
        </li>)
    })}
  </ul>
</section>)
}
export default Statistics;

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
