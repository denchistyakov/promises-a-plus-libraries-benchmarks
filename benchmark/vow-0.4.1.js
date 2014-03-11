'use strict';

var Vow = require('../libs/vow-0.4.1');

suite('Vow 0.4.1', function () {
    set('iterations', 100000);
    set('type', 'static');

    bench('then', function(done) {
        var defer = Vow.defer();

        defer.promise().then(function() {
            done();
        });

        defer.resolve('ok');
    });

    bench('then next tick', function(done) {
        var defer = Vow.defer();

        defer.promise().then(function() {
            done();
        });

        setImmediate(function() {
            defer.resolve('ok');
        });
    });

    bench('all + then', function(done) {
        var deferA = Vow.defer(),
            deferB = Vow.defer();

        Vow.all([deferA.promise(), deferB.promise()])
            .then(function(a) {
                done();
            });

        deferA.resolve('ok');

        setImmediate(function() {
            deferB.resolve('ok');
        });
    });

    bench('all + spread', function(done) {
        var deferA = Vow.defer(),
            deferB = Vow.defer();

        Vow.all([deferA.promise(), deferB.promise()])
            .spread(function(a, b) {
                done();
            });

        deferA.resolve('ok');

        setImmediate(function() {
            deferB.resolve('ok');
        });
    });

});
