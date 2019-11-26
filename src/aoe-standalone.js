class Aoe {
	constructor() {
		this.options = {
			attributes: {
				delay: 'data-aoe-delay',
				speed: 'data-aoe-speed'
			},
			observer: {
				root: null,
				threshold: [0, 0.5],
				shift: "0px"
			},
			once: true,
			speed: null,
			delay: null,
			timing: null,
		};
		this.currentAnimation = null;
		this.items = document.querySelectorAll('[data-aoe]');
	}

	/**
	 *  Create observer and set el attributes
	 */
	begin() {
		this.items.forEach((item) => {
			this.setAttributes(item);
			this.createObserver(item);
		});
	}

	/**
	 *  Set element speed/delay based on data-attr or/and options
	 * @param {Node} item 
	 */
	setAttributes(item) {
		let duration = item.style.animationDuration = (item.getAttribute(this.options.attributes.speed) || this.options.speed) + 'ms';
		let delay = item.style.animationDelay = (item.getAttribute(this.options.attributes.delay) || this.options.delay) + 'ms';
		let timing = item.style.animationTimingFunction = this.options.timing;
	}

	/**
	 * Creates Intersection Observer instance on element
	 * @param {Node} item
	 */
	createObserver(item) {
		let intersectionConfig = {
			root: this.options.observer.root,
			rootMargin: this.options.observer.shift,
			threshold: this.options.observer.threshold,
		};
		let observer = new IntersectionObserver(this.handleIntersect.bind(this), intersectionConfig);
		observer.observe(item);
	}

	/**
	 * Handles Intersection Observer 
	 * @param {IntersectionObserver} observers
	 */
	handleIntersect(observers) {
		observers.forEach(observer => {
			if (observer.intersectionRatio > 0.5) {
				this.animateItem(observer.target, 'in');
			}

			if (observer.intersectionRatio == 0 && this.options.once == false) {
				this.animateItem(observer.target, 'out');
			}
		});
	}

	/**
	 * 
	 * @param {Node} item 
	 * @param {String} direction 
	 */
	animateItem(item, direction) {
		this.currentAnimation = item.getAttribute('data-aoe');
		let a = this.currentAnimation;

		return (direction === 'in') ?
			item.classList.add(this.currentAnimation) :
			item.classList.remove(this.currentAnimation);
	}

	/**
	 * Init app and swap settings
	 * @param {Object} settings 
	 */
	init(settings) {
		if (!window.IntersectionObserver) {
			// disable animations and fade element in if somethings not right
			document.body.classList.add('no-aoe');
			console.warn('Your browser does not support IntersectionObserver! https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
			return;
		}

		// Swap constructor settings with options
		if (settings && settings !== this.options) {
			this.options = {
				...this.options,
				...settings,
			};
		}


		this.begin();
	}
}
