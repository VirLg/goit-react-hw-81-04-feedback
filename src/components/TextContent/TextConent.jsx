import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TextConent = ({ good, neutral, bad, summ, positiv }) => {
  return (
    <>
      <h2>
        Good: <span>{good}</span>
      </h2>
      <h2>
        Neutral: <span>{neutral}</span>
      </h2>
      <h2>
        Bad: <span>{bad}</span>
      </h2>
      <br />
      <h2>Total: {summ}</h2>

      <h2>positivePercentage: {positiv} %</h2>
    </>
  );
};

TextConent.propTypes = {};

export default TextConent;
TextConent.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  summ: PropTypes.number.isRequired,
  positiv: PropTypes.number.isRequired,
};
