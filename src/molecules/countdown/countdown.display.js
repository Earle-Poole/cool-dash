import { useState } from "react";
import { useInterval } from "../../utils/tacklebox";

const CountdownDisplay = ({
  timeObj,
  name,
  onRemove = (e) => console.log(e),
}) => {
  console.log("timeObj: ", timeObj);

  const [currentTime, setCurrentTime] = useState(timeObj);

  function tick() {
    switch (true) {
      case currentTime.second > 0:
        setCurrentTime({ ...currentTime, second: currentTime.second - 1 });
        break;
      case currentTime.minute > 0:
        setCurrentTime({
          ...currentTime,
          minute: currentTime.minute - 1,
          second: 59,
        });
        break;
      case currentTime.hour > 0:
        setCurrentTime({
          ...currentTime,
          hour: currentTime.hour - 1,
          minute: 59,
          second: 59,
        });
        break;
      case currentTime.day > 0:
        setCurrentTime({
          ...currentTime,
          day: currentTime.day - 1,
          hour: 23,
          minute: 59,
          second: 59,
        });
        break;
      case currentTime.month > 0:
        setCurrentTime({
          ...currentTime,
          month: currentTime.month - 1,
          day: 29,
          hour: 23,
          minute: 59,
          second: 59,
        });
        break;
      case currentTime.year > 0:
        setCurrentTime({
          ...currentTime,
          year: currentTime.year - 1,
          month: 11,
          day: 29,
          hour: 23,
          minute: 59,
          second: 59,
        });
        break;

      default:
        return;
    }
  }

  useInterval(tick, 1000);

  return (
    <div>
      <div>{name}</div>
      <button onClick={onRemove} type="button">
        Remove Event
      </button>
      <div className="displayedTime">
        <div className="year">
          Years
          <p className="placeholder">{currentTime.year}</p>
        </div>
        <div className="month">
          Months
          <p className="placeholder">{currentTime.month}</p>
        </div>
        <div className="day">
          Days
          <p className="placeholder">{currentTime.day}</p>
        </div>
        <div className="hour">
          Hours
          <p className="placeholder">{currentTime.hour}</p>
        </div>
        <div className="minute">
          Minutes
          <p className="placeholder">{currentTime.minute}</p>
        </div>
        <div className="second">
          Seconds
          <p className="placeholder">{currentTime.second}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownDisplay;
