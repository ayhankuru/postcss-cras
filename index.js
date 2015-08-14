'use strict';

var postcss = require('postcss');
var crass = require('crass');

module.exports = postcss.plugin('postcss-crass', function(opts) {
    if (!opts) {
        opts = {pretty: true, o1: true};
    }
    return function (css, result) {
        try {
            var parsed = crass.parse(css.toResult().toString());
            parsed = parsed.optimize({o1: opts.o1 || false});
            if(opts.pretty){
                parsed = parsed.pretty();
            }
            result.root = postcss.parse(parsed.toString());

        } catch (err) {
            throw new Error(err);
        }
    };
});
