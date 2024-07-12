import { useEffect, useState } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState({
    resume: false,
    pause: false,
    stop: false,
  });
  const [timerLimit, setTimerLimit] = useState(0);
  const { resume, pause, stop } = timer;

  const updateTime = () => {
    setSeconds((prev) => prev + 1);
  };

  useEffect(() => {
    let timerId: any;
    console.log(timerLimit, seconds);
    if (resume) {
      if (timerLimit > 0 && timerLimit === seconds) {
        handleStop();
        clearInterval(timerId);
      } else {
        timerId = setInterval(() => {
          updateTime();
        }, 1000);
      }
      return () => {
        clearInterval(timerId);
      };
    }
  }, [resume]);

  const handleTimer = () => {
    if (resume) {
      setTimer({ resume: false, pause: true, stop: false });
    } else {
      setTimer({ resume: true, pause: false, stop: false });
    }
  };

  const getTimerLabel = () => {
    if (resume) {
      return "Pause";
    } else if (stop) {
      return "Start";
    } else if (pause) {
      return "Resume";
    } else return "Start";
  };

  const handleStop = () => {
    setTimer({ resume: false, pause: false, stop: true });
    setSeconds(0);
  };

  const getClassName = () => {
    if (pause) {
      return "button pause";
    } else if (stop) {
      return "button stop";
    } else return "button start";
  };

  useEffect(() => {
    if (timerLimit > 0 && seconds === timerLimit + 1) {
      handleStop();
    }
  }, [seconds, timerLimit]);

  const handleReset = () => {
    setTimer({ resume: false, pause: false, stop: false });
    setSeconds(0);
    setTimerLimit(0);
  };

  return (
    <>
      <h4>Welcome to Stopwatch</h4>

      <div className="container">
        <div className={getClassName()} onClick={() => handleTimer()}>
          {getTimerLabel()}
        </div>

        <div className="timer">{seconds} Seconds</div>
        <br />
      </div>
      <div className="actions">
        <button className="stopButton" onClick={handleStop}>
          Stop
        </button>

        <button className="resetButton" onClick={handleReset}>
          reset
        </button>

        <label style={{ marginLeft: "5rem" }}>Enter Timer Limit</label>
        <input
          value={timerLimit}
          onChange={(e) => setTimerLimit(Number(e?.target.value))}
          className="input"
          type="number"
        />
      </div>
    </>
  );
};

export default Stopwatch;
