# Overview
Animate On entrance **(AOE)** is a lightweight, dependency free, insanely fast scroll animation library built on top of Intersection Observer API.

Combined with many **Included CSS3 animations** AOE aims to provice the fastest possible solution for animating elements as they appear in users viewport.

## Table of Contents
- [Overview](#overview)
	- [Table of Contents](#table-of-contents)
	- [View the demo](#view-the-demo)
- [Install](#install)
		- [As npm package](#as-npm-package)
		- [Standalone](#standalone)
- [Options](#options)
- [Usage](#usage)
- [Animations](#animations)
- [License](#license)

## [View the demo](https://thesigner.pl/aoe)

# Install

Make sure to **include aoe.css**
```html
<link rel="stylesheet" href="dist/aoe.css">
```

### As [npm package](https://www.npmjs.com/package/aoejs)

```bash
npm i aoejs
```

```js
import Aoe from 'aoejs';

const aoe = new Aoe();
aoe.init();
```

---
### Standalone
```html
<script src="dist/aoe-standalone.js"></script>
```

```js
const aoe = new Aoe();
aoe.init();
```

# Options

You can set options during initialization:

```js
aoe.init({
    speed: 1000,
    delay: 100,
	once: false,
	shift: '20px'
});
```

| Property | Type | Description | Default  |
|---------------------------|-------------|---------------|---------|
| `speed` | Int | Defines animation speed on all elements. eg. 1s | `null` |
| `delay` | Int | Defines animation delay on all elements. eg. 200ms | `null` |
| `timing` | String | Defines css timing function on all elements eg. ease-in | `null` |
| `shift` | String | Shifs when element is going to be triggered. eg. 200px | `0px` |
| `once` | Boolean | Defines if element should be animated every time it enters viewport. | `true` |

# Usage
Add `data-aoe` attribute to your desired HTML elements.
```html
<div data-aoe="popIn"></div>
```
With **AOE** you can easily affect animation speed and delay on individual items.
Simply set proper `data` attribute:
```html
<div data-aoe-delay="300" data-aoe-speed="100"></div>
```

# Animations
**AOE** ships with many **fancy CSS3 animations**
- `swoopInTop`
- `swoopInBottom`
- `swoopInLeft`
- `swoopInRight`
- `popIn`
- `popInTop`
- `popInBottom`
- `popInLeft`
- `popInRight`
- `hitLeft`
- `hitRight`
- `fadeIn`
- `fadeInTop`
- `fadeInBottom`
- `fadeInLeft`
- `fadeInRight`
- `jumpInLeft`
- `jumpInRight`
- `driveInTop`
- `driveInBottom`
- `driveInLeft`
- `driveInRight`
- `ball`
- `pull`
- `pullLeft`
- `pullRight`
- `unfold`
- `spinIn`
- `flipInX`
- `flipInY`
- `rollIn`

With **AOE** you can easily add your own, custom animations.
```html
<div data-aoe="CustomAnimation"></div>
```

```css
.CustomAnimation {
    animation-name: animation;
}

@keyframes animation {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
```
**Note:** You probably gonna need overflow-x: hidden on body / main

**Note:** Intersection Observer API does not work on older browsers! Make sure to:
- [check browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility)
- [and use a polyfill if you need one](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

Aoe should fallback to simple fadeIn animation if browser doesn't support it.

## License
Created by [Michał Gwóźdź](https://github.com/thesign3r). Released under the [ISC License](https://github.com/thesign3r/aoe/blob/master/LICENSE).
