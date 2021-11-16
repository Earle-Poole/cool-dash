import { useRef, useState } from "react";
import { useInterval } from "../../utils/tacklebox";

const CountdownDisplay = ({
  timeObj,
  name,
  originalDate,
  onRemove = (e) => console.log(e),
}) => {
  console.log("timeObj: ", timeObj);
  console.log("originalDate", originalDate);

  const [currentTime, setCurrentTime] = useState(timeObj);

  const timerContainerRef = useRef();

  function removeYourself() {
    console.log("new Date(originalDate): ", new Date(originalDate));
    const cutOffDayInMs =
      new Date(originalDate).valueOf() + 1000 * 60 * 60 * 24;
    const nowInMs = new Date().valueOf();

    if (nowInMs > cutOffDayInMs) {
      onRemove();
    }
  }

  function tick() {
    if (
      currentTime.second === 0 &&
      currentTime.minute === 0 &&
      currentTime.hour === 0 &&
      currentTime.day === 0 &&
      currentTime.month === 0 &&
      currentTime.year === 0
    ) {
      timerContainerRef.current.style.backgroundColor = "red";
      timerContainerRef.current.innerHTML = `<div class='elapsedEvent'>
        Today is ${name}!!!
      </div>`;
      removeYourself();
    }
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
    <div className="timerContainer" ref={timerContainerRef}>
      <div className="displayedEventName">{name}</div>
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
      <button onClick={onRemove} type="button" className="removeButton">
        Remove Event
      </button>
    </div>
  );
};

export default CountdownDisplay;
