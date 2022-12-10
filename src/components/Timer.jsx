import React from "react";
import { useStopwatch } from "react-timer-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";

function Timer() {
  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <div id = "timer">
          <h3>Time on task</h3>

    <div className="timeonTask">


      <div class="clock-container">
  <div class="clock-col">
    <p class="clock-day clock-timer"> {days} 
    </p>
    <p class="clock-label">
      Days
    </p>
    
  </div>
  <div class="clock-col">
    <p class="clock-hours clock-timer"> {hours}
    </p>
    <p class="clock-label">
      Hours
    </p>
  </div>
  <div class="clock-col">
    <p class="clock-minutes clock-timer"> {minutes} 
    </p>
    <p class="clock-label">
      Minutes
    </p>
  </div>
  <div class="clock-col">
    <p class="clock-seconds clock-timer"> {seconds}
    </p>
    <p class="clock-label">
      Seconds
    </p>
  </div>
</div>

      <button className="button-play" onClick={start}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button className="button-pause" onClick={pause}>
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button className="button-reset" onClick={reset}>
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
    </div>

  );
}

export default Timer;
