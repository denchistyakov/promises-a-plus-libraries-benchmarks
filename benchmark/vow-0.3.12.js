'use strict';

var Vow = require('../libs/vow-0.3.12');

suite('Vow 0.3.12', function() {
    set('iterations', 100000);
    set('type', 'static');

    bench('then', function(done) {
        var promise = Vow.promise();

        promise.then(function() {
            done();
        });

        promise.fulfill('ok');
    });

    bench('reject', function(done) {
        var promise = Vow.promise();

        promise.then(function() {
        }, function() {
            done();
        });

        promise.reject('rejected');
    });

    bench('catch', function(done) {
        var promise = Vow.promise();

        promise
            .then(function() {
                throw new Error('Catch me if you can');
            })
            .fail(function(err) {
                done(err);
            });

        promise.fulfill('ok');
    });

    bench('then next tick', function(done) {
        var promise = Vow.promise();

        promise.then(function() {
            done();
        });

        setImmediate(function() {
            promise.fulfill('ok');
        });
    });

    bench('all + then', function(done) {
        var promiseA = Vow.promise(),
            promiseB = Vow.promise();

        Vow.all([promiseA, promiseB])
            .then(function(a) {
                done();
            });

        promiseA.fulfill('ok');

        setImmediate(function() {
            promiseB.fulfill('ok');
        });
    });

    bench('all + spread', function(done) {
        var promiseA = Vow.promise(),
            promiseB = Vow.promise();

        Vow.all([promiseA, promiseB])
            .spread(function(a, b) {
                done();
            });

        promiseA.fulfill('ok');

        setImmediate(function() {
            promiseB.fulfill('ok');
        });
    });

});
