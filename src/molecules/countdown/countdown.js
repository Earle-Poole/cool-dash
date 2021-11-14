/* eslint-disable no-fallthrough */
import React, { useState, useRef } from "react";
import Button from "../../atoms/button/Button";
import "./countdown.css";
import CountdownDisplay from "./countdown.display";

const CountdownTimer = () => {
  const [timerData, setTimerData] = useState(
    JSON.parse(localStorage.getItem("myDates")) ?? []
  );

  const currentTime = new Date().valueOf();
  // const eventDate = new Date().valueOf();
  // const msTillEvent = eventDate - currentTime;

  const year = 31_471_200_000;

  const time = {
    year,
    month: year / 12,
    day: year / 365.25,
    hour: year / 365.25 / 24,
    minute: 60000,
    second: 1000,
  };

  function msTillEventConverter(number) {
    let numAnchor = number;
    const nums = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };

    switch (true) {
      case number > time.year:
        nums.year = Math.floor(numAnchor / time.year);
        numAnchor -= nums.year * time.year;
      case number > time.month:
        nums.month = Math.floor(numAnchor / time.month);
        numAnchor -= nums.month * time.month;
      case number > time.day:
        nums.day = Math.floor(numAnchor / time.day);
        numAnchor -= nums.day * time.day;
      case number > time.hour:
        nums.hour = Math.floor(numAnchor / time.hour);
        numAnchor -= nums.hour * time.hour;
      case number > time.minute:
        nums.minute = Math.floor(numAnchor / time.minute);
        numAnchor -= nums.minute * time.minute;
      case number >= time.second:
        nums.second = Math.floor(numAnchor / time.second);
        numAnchor -= nums.second * time.second;
      default:
        return nums;
    }
  }

  const newNameRef = useRef();
  const newDateRef = useRef();

  function onButtonClick() {
    const x = {
      date: newDateRef.current.value,
      name: newNameRef.current.value,
    };

    if (x.date && x.name) {
      setTimerData([...timerData, x]);
      newDateRef.current.value = "";
      newNameRef.current.value = "";
      localStorage.setItem("myDates", JSON.stringify([...timerData, x]));
    }
  }

  function basicRemove(name) {
    const filteredArr = timerData.filter((dataObj, i) => {
      return dataObj.name !== name;
    });
    setTimerData(filteredArr);
    localStorage.setItem("myDates", JSON.stringify(filteredArr));
  }

  return (
    <div>
      <h1>My Countdown Timer</h1>
      <div className="eventData">
        <input
          className="eventName"
          ref={newNameRef}
          placeholder="Type name of Event"
        ></input>
        <input
          className="eventDate"
          type="date"
          ref={newDateRef}
          placeholder="Enter Date of Event"
        ></input>
      </div>
      <div>
        <button onClick={onButtonClick} className="countdownButton">
          Submit
        </button>
      </div>
      {timerData.map((data, i) => {
        return (
          <CountdownDisplay
            name={data.name}
            timeObj={msTillEventConverter(
              new Date(data.date).valueOf() - currentTime
            )}
            onRemove={() => basicRemove(data.name)}
          />
        );
      })}
    </div>
  );
};

export default CountdownTimer;
