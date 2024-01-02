import React, { Component } from 'react';
import css from './App.module.css';


class App extends Component{

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
   onLeaveFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };
  
  countTotalFeedback=()=>{ 
  const { good, neutral, bad } = this.state;
return good + neutral + bad;
}
  
  countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  return total > 0 ? Math.round((good / total) * 100) : 0;
}
  
  render() {

    return (
       <div className={css.App__container}>
      <Section title="Your Opinion Matters To Us">
         <p>Please Leave Us Your Review </p>
          <FeedbackOptions/>
        </Section>
        <Section>

        </Section>
      </div>

    
  ); 
  }
};
  
export default App;