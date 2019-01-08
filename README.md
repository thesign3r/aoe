# Overview
Animate On entrance **(AOE)** is a lightweight, dependency free, insanely fast scroll animation library built on top of Intersection Observer API.

Combined with many **Included CSS3 animations** AOE aims to provice the fastest possible solution for animating elements as they appear in users viewport.

**AOE** comes with Mutation Observer, so it can listen for new elements and automatically register new Intersection Observer.

## [View the demo](http://thesigner.pl/aoe)


**Note:** Intersection Observer API does not work on older browsers! Make sure to:
- [check browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility)
- [and use a polyfill if you need one](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)


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
Initialize **AOE** by calling:
```js
aoe();

// or aoe({settings});
```

# Usage
Add `data-aoe` attribute to your desired HTML elements.
```html
<div data-aoe="popIn"></div>
```
With **AOE** you can easily affect animation speed and delay on individual items.
Simply set proper `data` attribute:
```html
<div 
data-aoe-delay="300"
data-aoe-speed="1000"
></div>
```


# Options

You can set options during initialization:

```js
aoe({
    speed: 1000,
    delay: 300,
    once: false,
    transitions: false,
    mutationsListener: document.getElementById('messages'),
    disabled: false,
});
```

| Property | Type | Description | Default  |
|---------------------------|-------------|---------------|---------|
| `speed` | Int | Defines animation speed on all elements. | `null` |
| `delay` | Int | Defines animation delay on all elements. | `null` |
| `once` | Boolean | Defines if animation should be played only once, and not when scrolling upwards. | `false` |
| `transitions` | Boolean | Controls if AOE should also include transition **(not to be mistaken with animation)** speed/delay. | `false` |
| `mutationsListener` | Node | This element (html wrapper) can listen for new elements with `data-aoe` attribute and automatically register new Intersection Observer on them. | `null` |
| `disabled` | Boolean | Disables **AOE.** | `false` |
| `selectors` | Object | Changes **AOE** selector. See [src/aoe.js #12](https://github.com/thesign3r/aoe/blob/master/src/aoe.js). | `false` |
| `callback` | Function | Calls desired function when element enters/leaves viewport | `null` |




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

Or even transitions (transition speed can be changed directly through **AOE speed option** or css).
```html
<div data-aoe="CustomTransition"></div>
```

```css
.CustomTransition {
   opacity: 1;
}
```

## License
Created by [Michał Gwóźdź](https://github.com/thesign3r). Released under the [MIT License](https://github.com/thesign3r/aoe/blob/master/LICENSE).
