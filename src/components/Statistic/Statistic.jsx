import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';

import TextConent from 'components/TextContent/TextConent';
import StatisticElement from 'components/StatisticElement/StatisticElement';

const Statistic = function () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleSubmit = evt => console.log(evt.target.name);

  const handleClick = evt => {
    console.log(evt.target.name);

    if (evt.target.name === 'good') setGood(prev => Number(prev) + 1);
    if (evt.target.name === 'neutral') setNeutral(prev => Number(prev) + 1);
    if (evt.target.name === 'bad') setBad(prev => Number(prev) + 1);
  };

  const summ = good + neutral + bad;
  const positivePercentage = Math.round((good / summ) * 100);
  console.log(positivePercentage);
  return (
    <>
      <TextConent
        good={good}
        neutral={neutral}
        bad={bad}
        summ={summ}
        positiv={positivePercentage}
      />
      <StatisticElement props={handleClick} />
    </>
  );
};

Statistic.propTypes = {};

export default Statistic;
