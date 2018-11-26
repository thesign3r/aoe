/**
 * @project        AOE
 * 
 * @description    "Animate On entrance (AOE) is a lightweight, dependency free, insanely fast scroll animation library built on top of Intersection Observer API",
 * @author         Michał Gwóźdź - thesigner
 * @version        0.1
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
	delay: null,
	transitions: false,
	disabled: false,
	mutationsListener: null,
};
let items = document.querySelectorAll(options.selectors.main);

let observer;
let mutations;
let ms = 'ms';
let speed;
let delay;

/**
 * Init
 * @param  {Object} settings
 */
const aoe = (settings) => {
	if (settings && settings !== options) {
		options = { // idk what it does but that line is very cool
			...options,
			...settings,
		};
	}

	// Create mutation observer if enabled
	// Useful for keeping track of new added nodes (eg. idk, livechat);
	if (options.mutationsListener != null) {
		createMutation(options.mutationsListener);
	}

	// Create IntersectionObserver instance for each node
	// Set css properties if passed in serrings
	items.forEach((item) => {
		if (item.getAttribute(options.selectors.name)) {
			createIntersection(item);
		}
		speed = (options.speed !== null) ? options.speed + ms : item.getAttribute(options.selectors.speed) + ms;
		delay = (options.delay !== null) ? options.delay + ms : item.getAttribute(options.selectors.delay) + ms;

		if (options.transitions == true) {
			item.style.transitionDuration = speed;
			item.style.transitionDelay = delay;
		}

		item.style.animationDuration = speed;
		item.style.animationDelay = delay;
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
		// threshold: 1.0
	};

	observer = new IntersectionObserver(handleIntersect, IntersectionConfig);
	observer.observe(item);
};

/**
 * Handles detected IntersectionObserver by toggling node class on & off
 * @param {Node} items 
 * @param {IntersectionObserver} observer 
 */
const handleIntersect = (items, observer) => {
	items.forEach((item) => {
		let animation = item.target.getAttribute(options.selectors.name);

		if (item.isIntersecting == true && options.disabled == false) {
			item.target.classList.add(animation);
		} else if (options.once != true) {
			item.target.classList.remove(animation);
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