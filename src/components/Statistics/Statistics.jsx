import React from 'react';
import css from './Statistics.module.css'

const Statistics = ({ feedbackData }) => {
  const { good, neutral, bad, total, positivePercentage } = feedbackData;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li className={css.item}>
        Positive feedback: {total > 0 ? positivePercentage : 0} %
      </li>
    </ul>
  );
};

export default Statistics