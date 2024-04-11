# aoejs
Elevate your web projects to the next level with **aoejs** – the ultimate animation companion.

**aoejs** empowers you to effortlessly add stunning animations to elements as they gracefully enter and exit the viewport. Crafted with simplicity and performance in mind, this lightweight package leverages the power of the Intersection Observer API for seamless integration and blazing-fast animations.

With customizable options and a collection of pre-built CSS3 animations, **aoejs** is your go-to solution for captivating user experiences. Say hello to dynamic web design with **aoejs**!


## Table of Contents
- [Overview](#overview)
	- [Table of Contents](#table-of-contents)
	- [View the demo](#view-the-demo)
- [Install](#install)
	- [npm package](#as-npm-package)
- [Options](#options)
- [Methods](#methods)
- [Usage](#usage)
- [Animations](#animations)
- [License](#license)

## [View the demo](https://thesigner.dev/aoe)

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


# Options

You can set options during initialization:

```js
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
```

| Property | Type | Description | Default  |
|---------------------------|-------------|---------------|---------|
| `once` | Boolean | Defines if element should be animated every time it enters viewport. | `false` |
| `speed` | Int | Defines animation speed on all elements - in ms | `null` |
| `delay` | Int | Defines animation delay on all elements - in ms | `null` |
| `timing` | String | Defines css timing function on all elements eg. ease-in | `null` |
| **`intersectionRatio`** | Node | **Tells how much of the target element needs to be visible within the root's intersection ratio in order to trigger animation** | `0.5` |
| `observerRoot` | Node | [root](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root) | `null/document` |
| `observeRootMargin` | string | [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) | `0px` |
| `observerThreshold` | number/array | [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold) | `[0, 0.5, 1]` |
| `attributes.dataset` | String | You can change the data-aoe="" into data-custom="" | `null` |
| `attributes.delay` | String | You can change the data-aoe-delay="" into custom-property-delay="" | `null` |
| `attributes.speed` | String | You can change the data-aoe-speed="" into custom-property-speed="" | `null` |


# Methods
Set callback for when element enters viewport

```js
const aoe = new Aoe();
aoe.init();

aoe.onEnter((entry) => {
  console.log("Element entered viewport:", entry.target);
});

```
Set callback for when element leaves viewport
```js
const aoe = new Aoe();
aoe.init();

aoe.onLeave((entry) => {
  console.log("Element left viewport:", entry.target);
});
```

Disconnect all observers
```js
const aoe = new Aoe();
aoe.init();

aoe.disconnectObservers();
```

# Usage
Add `data-aoe` attribute to your desired HTML elements.
```html
<div data-aoe="popIn"></div>
```
With **AOE** you can easily affect animation speed and delay on individual items.

Simply add speed/delay into `data-aoe` attribute (in miliseconds):
```html
<div data-aoe="popIn:1000:2000"></div>
<div data-aoe="popIn:duration:delay"></div>
<!-- or separately -->
<div data-aoe="popIn" data-aoe-delay="300" data-aoe-speed="100"></div>
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
@keyframes CustomAnimation {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.CustomAnimation {
    animation-name: CustomAnimation;
}
```



**Note:** You probably gonna need overflow-x: hidden on body / main

**Note:** Intersection Observer API does not work very old browsers!
Make sure to:
- [check browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility) [97.02% coverage]
- if you ever need one - [use polyfill](https://www.npmjs.com/package/intersection-observer-polyfill)

Aoe should fallback to simple fadeIn animation if browser doesn't support it.

## License
Created by [Michał Gwóźdź](https://github.com/thesign3r). Released under the [ISC License](https://github.com/thesign3r/aoe/blob/master/LICENSE).

Author website: [thesigner.dev](https://thesigner.dev)