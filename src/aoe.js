import "./aoe.scss";

export default class Aoe {
  constructor() {
    this.options = {
      attributes: {
        dataset: "data-aoe",
        delay: "data-aoe-delay",
        speed: "data-aoe-speed",
      },
      observerRoot: null,
      observeRootMargin: "0px",
      observerThreshold: [0, 0.5, 1],
      intersectionRatio: 0.5,
      once: false,
      speed: null,
      delay: null,
      qwe: "qwe",
      timingFunction: null,
    };
    this.items = [];
    this.observers = [];
    this.onEnterCallback = null;
    this.onLeaveCallback = null;
  }

  /**
   * Sets element animation attributes based on data attributes or options
   * @param {Node} item - The element to set attributes for
   */
  setAttributes(item) {
    const dataset = item.getAttribute(this.options.attributes.dataset);
    const attributes = dataset.split(":");
    const duration =
      attributes[1] || item.getAttribute(this.options.attributes.speed);
    const delay =
      attributes[2] || item.getAttribute(this.options.attributes.delay);

    item.style.animationDuration = `${duration || this.options.speed}ms`;
    item.style.animationDelay = `${delay || this.options.delay}ms`;
    item.style.animationTimingFunction = this.options.timingFunction;
  }

  /**
   * Creates Intersection Observer instance for each element
   * @param {Node} item - The element to observe
   */
  createObserver(item) {
    const intersectionConfig = {
      root: this.options.observerRoot,
      rootMargin: this.options.observeRootMargin,
      threshold: this.options.observerThreshold,
    };
    const observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      intersectionConfig
    );
    observer.observe(item);
    this.observers.push(observer);
  }

  /**
   * Sets the callback function to be called when an element enters the viewport
   * @param {Function} callback - The function to be called on element enter
   */
  onEnter(callback) {
    this.onEnterCallback = callback;
  }

  /**
   * Sets the callback function to be called when an element leaves the viewport
   * @param {Function} callback - The function to be called on element leave
   */
  onLeave(callback) {
    this.onLeaveCallback = callback;
  }

  /**
   * Handles Intersection Observer events
   * @param {IntersectionObserverEntry[]} entries - Array of observer entries
   */
  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.intersectionRatio >= this.options.intersectionRatio
      ) {
        this.animateItem(entry.target, "in");
        if (this.onEnterCallback) {
          this.onEnterCallback(entry);
        }
      } else if (!entry.isIntersecting && !this.options.once) {
        this.animateItem(entry.target, "out");
        if (this.onLeaveCallback) {
          this.onLeaveCallback(entry);
        }
      }
    });
  }

  /**
   * Animates the element based on direction
   * @param {Node} item - The element to animate
   * @param {String} direction - The direction of animation ('in' or 'out')
   */
  animateItem(item, direction) {
    const animationName = item.dataset.aoe.split(":")[0];
    if (direction === "in") {
      item.classList.add(animationName);
    } else {
      item.classList.remove(animationName);
    }
  }

  /**
   * Initializes the AOE library with optional settings
   * @param {Object} settings - Optional settings to override defaults
   */
  init(settings) {
    if (!window.IntersectionObserver) {
      document.body.classList.add("no-aoe");
      console.warn(
        "Your browser does not support IntersectionObserver! Please consider using a polyfill."
      );
      return;
    }

    // Merge constructor settings with provided options
    if (settings && settings !== this.options) {
      Object.assign(this.options, settings);
    }

    // Store items and set attributes
    this.items = document.querySelectorAll(
      `[${this.options.attributes.dataset}]`
    );
    this.items.forEach((item) => {
      this.setAttributes(item);
      this.createObserver(item);
    });
  }

  /**
   * Disconnects all observers
   */
  disconnectObservers() {
    this.observers.forEach((observer) => observer.disconnect());
  }
}
