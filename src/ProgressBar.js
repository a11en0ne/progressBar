import React from "react";
import bar from "./bar.jpg";
import pointer from "./pointer.jpg";

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
  } = props;

  const barStyles = {
    height: 20,
    width: "800px",
    backgroundImage: `url(${bar})`,
    transition: `width ${processingTime} ease-in-out`,
    // animation To be done
  };
  const topStyles = {
    height: 20,
    width: `${value}%`,
    backgroundImage: `url(${pointer})`,
    textAlign: "right",
  };

  return (
    <div className='content'>
      <h2>Progress Bar Display</h2>
      <div style={barStyles}>
        <div style={topStyles}>
          <p>{`${value}%`}</p>
        </div>
      </div>
      <div className='min-text'>{minValue}</div>
      <div className='max-text'>{maxValue}</div>
    </div>
  );
}

export default ProgressBar;
