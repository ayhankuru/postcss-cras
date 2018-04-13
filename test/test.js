var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-crass', function () {
    it('Test 1:', function (done) {
        test('b, c, a { third: rgba(255, 255, 255, 0.9); second: abc;}',
            'a,b,c{second:abc;third:hsla(0,0%,100%,.9)}',
            {o1: true}, done);
    });

    it('Test 2:', function (done) {
        test('a{font-weight:bold}#c{color:red}#b{font-weight:bold}',
            '#b,a{font-weight:700}#c{color:red}',
            {o1: true}, done);
    });

    // default swallow error false
    it('Test 3:', function (done) {
        test('a{font-weight:bold;;}#c{color:red}#b{font-weight:bold}',
            '#b,a{font-weight:700}#c{color:red}',
            {o1: true, swallowError: false}, function(err) {
                expect(err).to.be.defined;
                done();
            });
    });

    // swallow error false
    it('Test 4:', function (done) {
        test('a{font-weight:bold;;}#c{color:red}#b{font-weight:bold}',
            '#b,a{font-weight:700}#c{color:red}',
            {o1: true, swallowError: false}, function(err) {
                expect(err).to.be.defined;
                done();
            });
    });

    // swallow error true
    it('Test 5:', function (done) {
        test('a{font-weight:bold;;}#c{color:red}#b{font-weight:bold}',
            '#b,a{font-weight:700}#c{color:red}',
            {o1: true, swallowError: true}, function(err) {
                expect(err).to.be.empty;
                done();
            });
    });
});
