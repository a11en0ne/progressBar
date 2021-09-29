import React from "react";
import styled, { keyframes } from "styled-components";

function ProgressBar(props) {
  // destrcuture props
  const {
    topImg,
    barImg,
    minValue,
    maxValue,
    processingTime,
    repeatable,
    repeatTimes,
    value,
    stopValue,
  } = props;

  const loading = keyframes`
  from{
    width:0;
  }
  to{
    width:${stopValue}%;
  }
  `;
  const Top = styled.div`
    height: 20px;
    background-image: url(${process.env.PUBLIC_URL + topImg});
    border-radius: inherit;
    text-align: right;
    animation: ${loading} ${processingTime}s ease-in-out
      ${repeatable ? repeatTimes : 1};
    width: ${stopValue}%;
  `;

  const Bar = styled.div`
    height: 20px;
    width: 800px;
    background-image: url(${process.env.PUBLIC_URL + barImg});
    border-radius: 20px;
  `;

  return (
    <div className='content'>
      <h2>Progress Bar Display</h2>
      <Bar>
        <Top>
          <p>{`${stopValue}%`}</p>
        </Top>
      </Bar>
      <div className='min-text'>{minValue}</div>
      <div className='max-text'>{maxValue}</div>
    </div>
  );
}

export default ProgressBar;
