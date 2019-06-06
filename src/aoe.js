class Aoe {
	constructor() {
		this.options = {
			initialized: false,
			selectors: {
				name: 'data-aoe',
				main: '[data-aoe]',
				speed: 'data-aoe-speed',
				delay: 'data-aoe-delay',
			},
			root: null,
			shift: "0px",
			threshold: [0, 0.5, 1],
			once: true,
			speed: null,
			timing: null,
			delay: null,
		}
		this.items = document.querySelectorAll(this.options.selectors.main);
	}

	/**
	 *  Set element speed/delay based on data-attr or/and options
	 */
	addAttributes() {
		this.items.forEach((item) => {
			let itemSpeed = item.getAttribute(this.options.selectors.speed) || this.options.speed + 'ms';
			let itemDelay = item.getAttribute(this.options.selectors.delay) || this.options.delay + 'ms';

			item.style.animationDuration = itemSpeed;
			item.style.animationDelay = itemDelay;

			if (this.options.timing !== null) {
				item.style.animationTimingFunction = this.options.timing;
			}

			// Create IntersectionObserver instance for each node
			this.createObserver(item);
		});
	}

	/**
	 * Creates Intersection Observer instance on element
	 * @param {Node} item
	 */
	createObserver(item) {
		let intersectionConfig = {
			root: this.options.root,
			rootMargin: this.options.shift,
			threshold: this.options.threshold,
		};
		let observer = new IntersectionObserver(this.handleIntersect, intersectionConfig);
		observer.observe(item);
	}

	/**
	 * Handles Intersection Observer 
	 * @param {IntersectionObserver} observers
	 */
	handleIntersect(observers) {
		const observer = observers[0];

		// animate element in viewport right after load
		if (aoe.options.initialized == false) {
			if (observer.isIntersecting == true) {
				aoe.animateItem(observer.target, 'in');
			}
		}

		// animate if in the middle of element is in the viewport
		// @todo controlling ratios
		// @todo am i checking to much?
		if (observer.intersectionRatio >= 0.2 &&
			observer.intersectionRatio <= 0.9 &&
			observer.isIntersecting == true
		) {
			aoe.animateItem(observer.target, 'in');
		}

		// animate out when out of viewport top and bottom
		if (aoe.options.once === false &&
			observer.boundingClientRect.height < observer.boundingClientRect.y
		) {
			if (observer.intersectionRatio >= 0 &&
				observer.intersectionRatio <= 0.1
			) {
				aoe.animateItem(observer.target, 'out');
			}
		}

		// animate element right away if its higher than viewport and in viewport
		if (observer.boundingClientRect.height > observer.boundingClientRect.y &&
			observer.intersectionRatio > 0 &&
			observer.intersectionRatio < 0.1) {
			aoe.animateItem(observer.target, 'in');
		}
	}

	/**
	 * 
	 * @param {Node} item 
	 * @param {string} direction 
	 */
	animateItem(item, direction) {
		let animationName = item.getAttribute('data-aoe');
		return (direction === 'in') ?
			item.classList.add(animationName) :
			item.classList.remove(animationName);
	}

	/**
	 * Init app and swap settings
	 * @param {object} settings 
	 */
	init(settings) {
		if (!window.IntersectionObserver) {
			// aoe elements will fade in from default opacity 0
			document.body.classList.add('no-aoe');
			console.warn('Your browser does not support IntersectionObserver! https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
			return;
		}
		// swap constructor settings with options
		if (settings && settings !== this.options) {
			this.options = {
				...this.options,
				...settings,
			};
		}
		this.addAttributes();

		// mark app as initialized so we omit first if in handleIntersect
		// @todo need a better way
		setTimeout(() => {
			aoe.options.initialized = true;
		}, 100);
	}
}
// @todo czarek modul
// export { Aoe as default }