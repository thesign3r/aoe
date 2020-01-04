import Aoe from './../src/aoe.js';
var animations = [
	'popIn',
	'popInTop',
	'popInBottom',
	'popInLeft',
	'popInRight',
	'swoopInTop',
	'swoopInBottom',
	'swoopInLeft',
	'swoopInRight',
	'hitLeft',
	'hitRight',
	'fadeIn',
	'fadeInTop',
	'fadeInBottom',
	'fadeInLeft',
	'fadeInRight',
	'jumpInLeft',
	'jumpInRight',
	'driveInTop',
	'driveInBottom',
	'driveInLeft',
	'driveInRight',
	'ball',
	'pull',
	'pullLeft',
	'pullRight',
	'unfold',
	'spinIn',
	'flipInX',
	'flipInY',
	'rollIn',
];
for (let i = 0; i < animations.length; i++) {
	document.querySelector('.aoes').insertAdjacentHTML('afterBegin', `<div class="aoe" data-aoe="${animations[i]}"> ${animations[i]}</div><div class="space"></div>`)
}

// init aoe
const aoe = new Aoe();
aoe.init({
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
	speed: 1000,
	delay: 100,
	timing: 'ease-in',
});