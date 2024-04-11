import Aoe from "./src/aoe";

const aoe = new Aoe();
aoe.init({
  attributes: {
    dataset: "data-aoe",
    delay: "data-aoe-delay",
    speed: "data-aoe-speed",
  },
  observerRoot: null,
  observeRootMargin: "0px",
  observerThreshold: [0, 0.5, 0.75, 1],
  intersectionRatio: 0.5,
  once: false,
  speed: 1500,
  delay: 0,
  timingFunction: 'linear',
});

// Set callback for when element enters viewport
aoe.onEnter((element) => {
  console.log("Element entered viewport:", element);
});

// Set callback for when element leaves viewport
aoe.onLeave((element) => {
  console.log("Element left viewport:", element);
});

setTimeout(() => {
  // aoe.disconnectObservers();
}, 1500);