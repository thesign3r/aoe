/**
 * @project        AOE
 * 
 * @description    "Animate On entrance (AOE) is a lightweight, dependency free, insanely fast scroll 
 * animation library built on top of Intersection Observer API",
 * 
 * project to match my needs, credits to https://github.com/mciastek/sal/
 * 
 * @TODO Rewrite as class
 * @author         Michał Gwóźdź - thesigner
 * @version        0.2
 */

let options = {
	selectors: {
		name: 'data-aoe',
		main: '[data-aoe]',
		speed: 'data-aoe-speed',
		delay: 'data-aoe-delay',
	},
	root: null,
	rootMargin: "0px",
	once: false,
	speed: null,
	timing: null,
	delay: null,
	transitions: false,
	mutationsListener: null,
	callback: null,
};

let items;
let observer;
let mutations;
let ms = 'ms';
let speed;
let delay;
let animation;

/**
 * Init
 * @param  {Object} settings
 */
const aoe = (settings) => {
	if (settings && settings !== options) {
		options = {
			...options,
			...settings,
		};
	}
	items = document.querySelectorAll(options.selectors.main);

	// Create mutation observer if enabled
	// Useful for keeping track of new added nodes (eg. idk, livechat);
	if (options.mutationsListener != null) {
		createMutation(options.mutationsListener);
	}

	// Create IntersectionObserver instance for each node
	// Set css properties if passed in settings
	items.forEach((item) => {
		speed = (options.speed !== null) ? options.speed + ms : item.getAttribute(options.selectors.speed) + ms;
		delay = (options.delay !== null) ? options.delay + ms : item.getAttribute(options.selectors.delay) + ms;
		item.style.animationDuration = speed;
		item.style.animationDelay = delay;

		createIntersection(item);

		if (options.transitions == true) {
			item.style.transitionDuration = speed;
			item.style.transitionDelay = delay;
		}
		if (options.timing !== null) {
			item.style.animationTimingFunction = options.timing;
		}
	});
};

/**
 * Creates Intersection Observer instance on node
 * @param {Node} listener 
 */
const createIntersection = (item) => {
	let IntersectionConfig = {
		root: options.root,
		rootMargin: options.rootMargin,
		threshold: 0.5,
	};

	observer = new IntersectionObserver(handleIntersect, IntersectionConfig);
	observer.observe(item);
};

const animate = (item, animateIn) => {
	console.log(animateIn);
	animation = item.target.getAttribute(options.selectors.name);

	if (item.intersectionRatio >= 0.5) {
		item.target.classList.add(animation);
	} else if (options.once != true) {
		item.target.classList.remove(animation);
	};

	if (options.once == true) {
		observer.unobserve(item.target);
	}
};

/**
 * Handles detected IntersectionObserver by toggling node class on & off
 * @param {Node} items 
 * @param {IntersectionObserver} observer 
 */
const handleIntersect = (items) => { // (items, observer) => @todo consider using threshold so large elements can appear earlier
	items.forEach((item) => {
		console.log(item.intersectionRatio);
		if (item.isIntersecting == true) {
			animate(item, true);
		} else if (options.once != true) {
			animate(item, false);
		}

		if (options.callback !== null) {
			var call = options.callback;
			call(item);
		}
	});
};

/**
 * Creates MutationObserver instance on listener node
 * @param {Node} listener 
 */
const createMutation = (listener) => {
	let mutationConfig = {
		false: true,
		childList: true,
		characterData: false
	};

	mutations = new MutationObserver(handleMutation);
	mutations.observe(listener, mutationConfig);
};

/**
 * Handles MutationObserver by adding new IntersectionObserver on new aoe nodes
 * @param {MutationObserver} mutations 
 */
const handleMutation = (mutations) => {
	let newItem = mutations[0].addedNodes[0];
	var newIntersect = newItem.querySelectorAll(options.selectors.main)[0];
	if (newItem) {
		let newObserve = (newIntersect) ? newIntersect : newItem;
		createIntersection(newObserve);
	}
};

if (!window.IntersectionObserver) {
	throw Error(`
    Your browser does not support IntersectionObserver!
    https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    `);
}