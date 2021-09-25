import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import "./CircularTimer.css";

const CircularTimer = (props) => {
  const { duration, onFunction, restart, setRestart } = props;
  const [progress, setProgress] = useState(duration);

  useEffect(() => {
    if (restart) {
      setProgress(duration);
      setRestart(false);
    }

    if (progress > 0) {
      const timer = setInterval(() => {
        setProgress(progress - 1)
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      onFunction();
      setProgress(duration);
    }
  }, [duration, onFunction, progress, restart, setRestart]);

  return (
    <span className="circlar-timer">
      <CircularProgressWithLabel
        value={progress}
        progress={duration - progress}
        duration={duration}
      />
    </span>
  )
}

CircularTimer.propTypes = {
  duration:  PropTypes.number.isRequired,
  onFunction: PropTypes.func.isRequired,
  restart: PropTypes.bool.isRequired,
  setRestart: PropTypes.func.isRequired
}

export default CircularTimer;