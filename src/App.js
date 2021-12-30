import React, { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistic from "./Feedback/Statistics";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification";

const options = ['good', 'neutral', 'bad'];
class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

  setValue = grade => {
        this.setState(state => ({
            [grade]: state[grade] + 1,
        }));
  };

  countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = total => {
        return Math.round(this.state.good / total * 100);
    };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(countTotalFeedback);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.setValue}
          />
        </Section>
        <Section title="Statistic">
          {countTotalFeedback
            ? < Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </>
    );
  }
}

export default App;
