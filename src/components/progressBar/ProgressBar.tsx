import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (val: number) => {
    setValue(val);
  };

  const updateValue = () => {
    if (value <= 100) {
      setValue((preVal) => (preVal !== 100 ? preVal + 1 : preVal));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValue, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  console.log(value);

  return (
    <div>
      <input
        type="range"
        value={value}
        min={0}
        max={100}
        color="green"
        style={{ width: "400px", color: "green" }}
        onChange={(e: any) => handleChange(e.target.value)}
      />

      <span>{value}</span>

      <div
        style={{
          width: "400px",
          //   backgroundColor: "grey",
          color: "green",
          fontWeight: 600,
        }}
      >
        {value === 100 ? "Upload Finished !!!" : ""}
      </div>
    </div>
  );
};

export default ProgressBar;
