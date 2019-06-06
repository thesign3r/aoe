# Overview
Animate On entrance **(AOE)** is a lightweight, dependency free, insanely fast scroll animation library built on top of Intersection Observer API.

Combined with many **Included CSS3 animations** AOE aims to provice the fastest possible solution for animating elements as they appear in users viewport.

**AOE** comes with Mutation Observer, so it can listen for new elements and automatically register new Intersection Observer.

## [View the demo](http://thesigner.pl/aoe)


**Note:** Intersection Observer API does not work on older browsers! Make sure to:
- [check browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility)
- [and use a polyfill if you need one](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

Aoe should fallback to simple fadeIn animation if browser doesn't support it.

## Table of Contents
- [Installation](#install)
- [Usage](#usage)
- [Options](#options)
- [Animations](#animations)
- [License](#license)

# Install
Make sure to **include both aoe.js and aoe.css**
```html
<link rel="stylesheet" href="dist/aoe.css">
```
```html
<script src="dist/aoe.js"></script>
```

```js
const aoe = new Aoe();
aoe.init();
```

# Options

You can set options during initialization:

```js
aoe({
    speed: '1s',
    delay: '300ms',
	once: false,
	shift: 
});
```

| Property | Type | Description | Default  |
|---------------------------|-------------|---------------|---------|
| `speed` | String | Defines animation speed on all elements. eg. 1s | `null` |
| `delay` | String | Defines animation delay on all elements. eg. 200ms | `null` |
| `timing` | String | Defines css timing function on all elements eg. ease-in | `0px` |
| `shift` | String | Shifs when element is going to be triggered. eg. 200px | `0px` |
| `once` | Boolean | Defines if element should be animated every time it enters viewport. | `true` |
| `selectors` | Object | Changes **AOE** selectors. See [src/aoe.js #5](https://github.com/thesign3r/aoe/blob/master/src/aoe.js). | `false` |

# Usage
Add `data-aoe` attribute to your desired HTML elements.
```html
<div data-aoe="popIn"></div>
```
With **AOE** you can easily affect animation speed and delay on individual items.
Simply set proper `data` attribute:
```html
<div 
data-aoe-delay="300ms"
data-aoe-speed="1s"
></div>
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

## License
Created by [Michał Gwóźdź](https://github.com/thesign3r). Released under the [MIT License](https://github.com/thesign3r/aoe/blob/master/LICENSE).
