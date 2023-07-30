import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

const TextConent = ({ good, neutral, bad, summ, positiv }) => {
  // console.log(summ);
  // const { good, neutral, bad, total } = props;
  return (
    <>
      <h1>Statistics</h1>
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
