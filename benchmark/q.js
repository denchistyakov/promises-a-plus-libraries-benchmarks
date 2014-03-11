'use strict';

var Q = require('q');

suite('Q', function() {
    set('iterations', 100000);
    set('type', 'static');

    bench('then', function(done) {
        var defer = Q.defer();

        defer.promise.then(function() {
            done();
        });

        defer.resolve('ok');
    });

    bench('reject', function(done) {
        var defer = Q.defer();

        defer.promise.then(function() {
        }, function() {
            done();
        });

        defer.reject('rejected');
    });

    bench('catch', function(done) {
        var defer = Q.defer();

        defer.promise
            .then(function() {
                throw new Error('Catch me if you can');
            })
            .catch(function(err) {
                done(err);
            });

        defer.resolve('ok');
    });

    bench('then next tick', function(done) {
        var defer = Q.defer();

        defer.promise.then(function() {
            done();
        });

        setImmediate(function() {
            defer.resolve('ok');
        });
    });

    bench('all + then', function(done) {
        var deferA = Q.defer(),
            deferB = Q.defer();

        Q.all([deferA.promise, deferB.promise])
            .then(function(a) {
                done();
            });

        deferA.resolve('ok');

        setImmediate(function() {
            deferB.resolve('ok');
        });
    });

    bench('all + spread', function(done) {
        var deferA = Q.defer(),
            deferB = Q.defer();

        Q.all([deferA.promise, deferB.promise])
            .spread(function(a, b) {
                done();
            });

        deferA.resolve('ok');

        setImmediate(function() {
            deferB.resolve('ok');
        });
    });

});
