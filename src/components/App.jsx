import React from 'react';
import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const statusBtn = event.target.name;
    if (statusBtn === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (statusBtn === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (statusBtn === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return <>{total ? Math.floor(((good + neutral) * 100) / total) : 0}%</>;
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']} //Object.keys(this.state)
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>

      <Section title="Statistics">
        {countTotalFeedback(good, neutral, bad) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          />
        ) : (
          <Notification messages="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
