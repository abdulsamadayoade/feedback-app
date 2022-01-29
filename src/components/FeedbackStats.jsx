import React from 'react';
import PropTypes from 'prop-types';

const FeedbackStats = ({feedback}) => {
  // Calculate the average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  // acc is the initial value at first and in the above 0 is the initial value. if initial value is not provided, it will be the first item in the array.
  // curr is the current value  which signifies the first element in the array but in a situation where there is no initial value and the first element in the array is used as initial value/previous value, the current value will be the second item in the array

  // 0 + 10 = 10
  // 10 + 9 = 19
  // 19 + 8 = 27

  // 27 / 3 = 9
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return <div className="feedback-stats">
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
  </div>;
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array
}

export default FeedbackStats;