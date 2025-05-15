import React, { useEffect, useState } from "react";
import { MAX, MIN } from "../constants";

const Progressbar = ({ onComplete, value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percent.toFixed()}
        role="progressbar"
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default Progressbar;
