import react from "react";
import "./countdown.css";

const Countdown = () => {
  function handleTickInit(tick) {
    const rotation = ["Tick   ", "Counter", "Is     ", "Flippin", "Awesome"];
    // current rotation index (we start at the first word)
    var index = 0;

    // each 3 seconds we'll update the billboard
    setInterval(function () {
      // get the word at the current index
      tick.value = rotation[index];

      // when we reach the end we start over at zero
      index = index < rotation.length - 1 ? index + 1 : 0;
    }, 3000);
  }

  return (
    <div>
      <h1>Lets do this CountDown thing</h1>
      <div class="tick" data-did-init="handleTickInit">
        <div
          data-repeat="true"
          data-layout="horizontal fit"
          data-transform="upper -> split -> delay(random, 100, 150)"
        >
          <span
            data-view="flip"
            data-transform="ascii -> arrive -> round -> char(a-zA-Z)"
            class="tick-char"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
