# PostCSS Crass [![Travis Build Status](http://img.shields.io/travis/post-crass/.svg?style=flat-square)](https://travis-ci.org/post-crass/) [![Circle Build Status](https://img.shields.io/circleci/project/post-crass/.svg?style=flat-square)](https://circleci.com/gh/post-crass/) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/post-crass/.svg?style=flat-square)](https://ci.appveyor.com/project/post-crass/) [![Build Status](https://img.shields.io/david/post-crass/.svg?style=flat-square)](https://david-dm.org/post-crass/) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)

[PostCSS] plugin crass.

[PostCSS]: https://github.com/postcss/postcss 

```css
b, c, a {
    third: rgba(255, 255, 255, 0.9);
    second: abc;
    first: 50%;
}
```

```css
a, b, c {
    first: 50%;
    second: abc;
    third: hsla(0, 0%, 100%, 0.9);
}
```

## Usage


```sh
npm install --save-dev postcss-crass
```

## Usage

```js
var crass = require('postcss-crass');

postcss([ crass(opts) ])
```

## Options

### crass(options)


#### options.pretty

Type: `Boolean`
Default: `false`


#### options.o1 

Type: `Boolean`
Default: `true`

