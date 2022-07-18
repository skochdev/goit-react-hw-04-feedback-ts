import React from 'react';
import css from './Statistics.module.css';

type Props = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};

export const Statistics: React.FC<Props> = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.Statistics}>
        <li className={css.StatisticsItem}>Good: {good}</li>
        <li className={css.StatisticsItem}>Neutral: {neutral}</li>
        <li className={css.StatisticsItem}>Bad: {bad}</li>
      </ul>

      <div className={css.extraStats}>
        <p>Total reviews: {total}</p>
        <p>Positive reviews percentage: {positivePercentage}%</p>
      </div>
    </>
  );
};
