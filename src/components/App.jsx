import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return <>{total ? Math.floor(((good + neutral) * 100) / total) : 0}%</>;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>

        <Section title="Statistics">
          {this.countTotalFeedback(
            this.state.good,
            this.state.neutral,
            this.state.bad
          ) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state.good,
                this.state.neutral,
                this.state.bad
              )}
            />
          ) : (
            <Notification messages="There is no feedback" />
          )}
        </Section>
        {/* <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        /> */}
      </div>
    );
  }
}
