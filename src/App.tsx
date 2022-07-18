import React, { useState } from 'react';
import './App.module.css';
import { FeedbackOptions } from './components/Feedback/FeedbackOptions';
import { Statistics } from './components/Feedback/Statistics';
import { Section } from './components/Feedback/Section';
import css from './App.module.css';
import { Notification } from './components/Feedback/Notification';

export default function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const onLeaveFeedback = (event: React.MouseEvent<HTMLButtonElement>) => {
    let buttonAction = event.currentTarget.dataset.action;

    switch (buttonAction) {
      case 'good': {
        setGood(good + 1);
        return;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        return;
      }

      case 'bad': {
        setBad(bad + 1);
        return;
      }
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const getPercentageOfPositiveReviews = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <main className={css.App}>
      <Section title="Please leave a feedback :)">
        <FeedbackOptions
          options={{ bad, good, neutral }}
          clickHandler={event => onLeaveFeedback(event)}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Reviews">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={getPercentageOfPositiveReviews()}
            total={countTotalFeedback()}
          />
        </Section>
      ) : (
        <Notification message="No reviews yet..." />
      )}
    </main>
  );
}
