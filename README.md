# PostCSS Crass [![Travis Build Status](http://img.shields.io/travis/ayhankuru/postcss-crass.svg?style=flat-square)](https://travis-ci.org/ayhankuru/postcss-crass) [![Circle Build Status](https://img.shields.io/circleci/project/ayhankuru/postcss-crass.svg?style=flat-square)](https://circleci.com/gh/ayhankuru/postcss-crass) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/ayhankuru/postcss-crass.svg?style=flat-square)](https://ci.appveyor.com/project/ayhankuru/postcss-crass) [![Build Status](https://img.shields.io/david/ayhankuru/postcss-crass.svg?style=flat-square)](https://david-dm.org/ayhankuru/postcss-crass) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)

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

#### options.swallowError

Type: `Boolean`
Default: `false`

If true, crass won't throw errors.

### crass(options)


#### options.pretty

Type: `Boolean`
Default: `false`


#### options.o1

Type: `Boolean`
Default: `true`
