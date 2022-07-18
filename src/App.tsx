import React, { Component } from 'react';
import './App.module.css';
import { FeedbackOptions } from './components/Feedback/FeedbackOptions';
import { Statistics } from './components/Feedback/Statistics';
import { Section } from './components/Feedback/Section';
import css from './App.module.css';
import { Notification } from './components/Feedback/Notification';

type State = {
  good: number;
  neutral: number;
  bad: number;
};

export class App extends Component<{}, State> {
  state: State = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // one handler for all three buttons. Uses dataset to determine which button was clicked
  onLeaveFeedback = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let buttonAction = event.currentTarget.dataset.action;
    if (buttonAction === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (buttonAction === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else {
      this.setState(prev => ({
        bad: prev.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const reviews: number[] = Object.values(this.state);
    return reviews.reduce((acc, value) => acc + value, 0);
  };

  getPercentageOfPositiveReviews = () => {
    const totalReviewsCount = this.countTotalFeedback();
    const positiveReviewCount = this.state.good;
    return Math.floor((positiveReviewCount / totalReviewsCount) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      getPercentageOfPositiveReviews,
      countTotalFeedback,
      onLeaveFeedback,
    } = this;

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
}
