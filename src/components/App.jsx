import { Component } from 'react';
import css from './App.module.css';


import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    console.log(`Clicked on ${type} button`);
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.good + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(good);
    const options = Object.keys(this.state);

    return (
      <div className={css.App__container}>
        <Section
          title="Your Opinion Matters To Us"
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          onLeaveFeedback={this.handleFeedback}
        >
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
          {total > 0 ? (
           <Statistics feedbackData={{ good, neutral, bad, total, positivePercentage }} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;