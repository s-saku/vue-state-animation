# vue-state-animation

vue-state-animation provides a capability to update Vue component's data value by requestAnimationFrame with a simple APIs that builds on d3-ease. The file size is just **4KB** (minified).

This is the Vue.js version of react-state-animation by @tejitak [https://github.com/tejitak/react-state-animation](https://github.com/tejitak/react-state-animation)

## Installation
`npm install vue-state-animation --save`  
Include the module by CommonJS way  
`import VueAnimation from 'vue-state-animation'` or `var VueAnimation = require('vue-state-animation');`  

This will require ES5 modules converted by babel. ES6 sources are in /src and converted ES5 modules are located in /lib.

## API

  - linearIn(*stateProp*, *endStateValue*, *duration*)
  - linearOut(*stateProp*, *endStateValue*, *duration*)
  - linearInOut(*stateProp*, *endStateValue*, *duration*)
  - quadIn(*stateProp*, *endStateValue*, *duration*)
  - quadOut(*stateProp*, *endStateValue*, *duration*)
  - quadInOut(*stateProp*, *endStateValue*, *duration*)
  - cubicIn(*stateProp*, *endStateValue*, *duration*)
  - cubicOut(*stateProp*, *endStateValue*, *duration*)
  - cubicInOut(*stateProp*, *endStateValue*, *duration*)
  - polyIn(*stateProp*, *endStateValue*, *duration*)
  - polyOut(*stateProp*, *endStateValue*, *duration*)
  - polyInOut(*stateProp*, *endStateValue*, *duration*)
  - sinIn(*stateProp*, *endStateValue*, *duration*)
  - sinOut(*stateProp*, *endStateValue*, *duration*)
  - sinInOut(*stateProp*, *endStateValue*, *duration*)
  - expIn(*stateProp*, *endStateValue*, *duration*)
  - expOut(*stateProp*, *endStateValue*, *duration*)
  - expInOut(*stateProp*, *endStateValue*, *duration*)
  - circleIn(*stateProp*, *endStateValue*, *duration*)
  - circleOut(*stateProp*, *endStateValue*, *duration*)
  - circleInOut(*stateProp*, *endStateValue*, *duration*)
  - bounceIn(*stateProp*, *endStateValue*, *duration*)
  - bounceOut(*stateProp*, *endStateValue*, *duration*)
  - bounceInOut(*stateProp*, *endStateValue*, *duration*)
  - backIn(*stateProp*, *endStateValue*, *duration*)
  - backOut(*stateProp*, *endStateValue*, *duration*)
  - backInOut(*stateProp*, *endStateValue*, *duration*)
  - elasticIn(*stateProp*, *endStateValue*, *duration*)
  - elasticOut(*stateProp*, *endStateValue*, *duration*)
  - elasticInOut(*stateProp*, *endStateValue*, *duration*)

The above API returns Promise, so you can chain additinal processes by using then.

## Usage
```js:yourComponent.vue
import VueAnimation from 'vue-state-animation'
var animation = new VueAnimation(this/*your Component*/)
animation.linearIn('yourComponentProperty1', 350/*end value*/, 1000/*duration(ms)*/).then(() => animation.linearInOut('yourComponentProperty2', 0, 400))
```

