import React from 'react';
import { Button } from 'antd';
import css from './FeedbackOptions.module.css';

type Props = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options: {
    good: number;
    neutral: number;
    bad: number;
  };
};

export const FeedbackOptions: React.FC<Props> = ({ clickHandler }) => {
  return (
    <ul className={css.FeedbackOptions}>
      <li className={css.FeedbackOptionsItem}>
        <Button
          className={css.FeedbackButton}
          data-action="good"
          onClick={clickHandler}
        >
          Good
        </Button>
      </li>
      <li className={css.FeedbackOptionsItem}>
        <Button
          className={css.FeedbackButton}
          data-action="neutral"
          onClick={clickHandler}
        >
          Neutral
        </Button>
      </li>
      <li className={css.FeedbackOptionsItem}>
        <Button
          className={css.FeedbackButton}
          data-action="bad"
          onClick={clickHandler}
        >
          Bad
        </Button>
      </li>
    </ul>
  );
};
